import substitution


def get_shift_map(alphabet: str, shift: int) -> dict[str, str]:
    map = { char: alphabet[(i + shift) % len(alphabet)] for i, char in enumerate(alphabet)}

    return map


def get_keyed_map(alphabet: str, key: str) -> dict[str, str]:
    map = {}
    i = 0
    for char in key:
        map[alphabet[i]] = char
        i += 1

    for char in alphabet:
        if i >= len(alphabet):
            break

        if char not in key:
            map[alphabet[i]] = char
            i += 1

    return map


def shift_msg_range(text: str, shift_range: tuple[int, int], alphabet: str) -> list[str]:
    shift_maps = [get_shift_map(alphabet, i) for i in range(shift_range[0], shift_range[1]) ]
    shifted_texts = substitution.get_substitution_over(text, shift_maps)

    return shifted_texts


def enumerate_shift(text: str, alphabet: str) -> list[str]:
    shift_range = (0, len(alphabet))
    texts: list[str] = shift_msg_range(text, shift_range, alphabet)
    return texts
