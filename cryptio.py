def print_list(texts: list[str]) -> None:
    for i, text in enumerate(texts):
        print(i, text)


def print_list_first_n_chars(texts: list[str], n: int) -> None:
    for i, text in enumerate(texts):
        print(f"{i: >2}: {text[0:n]}")


def output_list(texts: list[str], file_name: str) -> None:
    
    output: str = '\n\n'.join([f"{i}: {text}" for i, text in enumerate(texts)])

    with open(file_name, 'w') as f:
        f.write(output)


def get_input() -> str:
    enciphered_text: str = input("Enciphered Text:")
    return enciphered_text
