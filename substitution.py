def get_substitution(text: str, sub_map: dict[str, str]) -> str:
    substituted: str = ""
    for char in text:
        substitution: str | None = sub_map.get(char)

        if substitution is None:
            substitution = "<INV_CHAR>"

        substituted += substitution

    return substituted


def get_substitution_over(text: str, sub_maps: list[dict[str, str]]) -> list[str]:
    subs: list[str] = [get_substitution(text, sub_map) for sub_map in sub_maps]

    return subs
