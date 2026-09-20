#!/usr/bin/env python3
"""Add new portfolio images to index.html and refresh gallery counts."""

from pathlib import Path
import html
import re


ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / "index.html"
IMAGE_ROOT = ROOT / "images" / "portfolio"
IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".avif"}

CATEGORIES = {
    "portraits": "portraits",
    "celebrations": "celebrations",
    "details": "flavours-details",
    "places": "places-streets",
    "wildlife": "nature-wildlife",
}


def image_class(filename: str) -> str:
    name = filename.lower()
    if name.startswith("portrait-") or "-portrait." in name:
        return "photo portrait"
    if name.startswith("wide-") or "-wide." in name:
        return "photo wide"
    return "photo"


def description(filename: str) -> str:
    words = Path(filename).stem.replace("_", " ").replace("-", " ").strip()
    return words.capitalize() or "Portfolio photograph"


def section_pattern(section_id: str) -> re.Pattern[str]:
    return re.compile(
        rf'(<section\b[^>]*\bid="{re.escape(section_id)}"[^>]*>)(.*?)(</section>)',
        re.DOTALL,
    )


def add_category(document: str, section_id: str, folder_name: str) -> tuple[str, int]:
    match = section_pattern(section_id).search(document)
    if not match:
        raise RuntimeError(f"Could not find section #{section_id}")

    section = match.group(2)
    existing_paths = set(re.findall(r'data-full="([^"]+)"', section))
    folder = IMAGE_ROOT / folder_name
    files = sorted(
        path for path in folder.iterdir()
        if path.is_file() and path.suffix.lower() in IMAGE_EXTENSIONS
    ) if folder.exists() else []

    additions = []
    for path in files:
        relative = path.relative_to(ROOT).as_posix()
        if relative in existing_paths:
            continue
        additions.append(
            '        <button class="{}" data-full="{}"><img src="{}" alt="{}" loading="lazy"></button>'.format(
                image_class(path.name),
                html.escape(relative, quote=True),
                html.escape(relative, quote=True),
                html.escape(description(path.name), quote=True),
            )
        )

    if additions:
        masonry_close = re.search(r'(\n\s*</div>)(?!.*\n\s*</div>)', section, re.DOTALL)
        if not masonry_close:
            raise RuntimeError(f"Could not find gallery end in section #{section_id}")
        section = section[:masonry_close.start()] + "\n" + "\n".join(additions) + section[masonry_close.start():]

    count = len(re.findall(r'<button\b[^>]*class="[^"]*\bphoto\b', section))
    document = document[:match.start(2)] + section + document[match.end(2):]

    count_pattern = re.compile(
        rf'(<a\s+href="#{re.escape(section_id)}"[^>]*>.*?<b>)\d+(</b>)',
        re.DOTALL,
    )
    document, replacements = count_pattern.subn(
        lambda value: f"{value.group(1)}{count:02d}{value.group(2)}",
        document,
        count=1,
    )
    if replacements != 1:
        raise RuntimeError(f"Could not update menu count for #{section_id}")
    return document, count


def main() -> None:
    document = INDEX.read_text(encoding="utf-8")
    counts = {}
    for section_id, folder_name in CATEGORIES.items():
        document, counts[section_id] = add_category(document, section_id, folder_name)
    INDEX.write_text(document, encoding="utf-8")
    print("Updated gallery counts:", counts)


if __name__ == "__main__":
    main()
