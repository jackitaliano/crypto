from plot import show_bar_chart

def count_char(text: str, char: str) -> int:
    count: int = 0

    for text_char in text:
        if text_char == char:
            count += 1

    return count


def count_chars(text: str, chars: str) -> dict[str,int]:
    counts: dict[str, int] = {}

    for text_char in text:
        if text_char in chars:
            cur_count = counts.get(text_char, 0)
            counts[text_char] = cur_count + 1

    return counts


def count_text_chars(text: str) -> dict[str, int]:
    counts: dict[str, int] = {}

    for text_char in text:
        cur_count = counts.get(text_char, 0)
        counts[text_char] = cur_count + 1

    return counts


def display_counts(counts: dict[str, int]):
    chars: list[str] = counts.keys()
    vals: list[int] = counts.values()

    show_bar_chart(chars, vals)

