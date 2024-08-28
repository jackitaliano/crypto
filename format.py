from textwrap import wrap


def clean_input(msg: str) -> str:
    cleaned = msg\
    .replace(" ", "")\
    .replace("\n", "")\
    .upper()
    return cleaned


def format_output(msg: str) -> str:
    chunks = wrap(msg, 5)
    chunked_msg = ' '.join(chunks)

    return chunked_msg


def reverse_string(text: str) -> str:
    return text[::-1]


def reverse_strings(texts: list[str]) -> list[str]:
    rev_texts: list[str] = []
    for text in texts:
        rev_texts.append(reverse_string(text))

    return rev_texts
