from sys import argv

import format
import cryptio
import shift_cipher
from alphabets import ENGLISH_ALPHABET

def main():
    argc = len(argv)

    if argc > 2:
        print("ERROR: Can pass a maximum of one argument (enciphered text)")
        return
    elif argc == 2:
        encrypted: str = argv[1]
    else:
        encrypted = cryptio.get_input()


    cleaned: str = format.clean_input(encrypted)

    shifted_texts: list[str] = shift_cipher.enumerate_shift(cleaned, ENGLISH_ALPHABET)

    print("shifted: ")
    cryptio.print_list_first_n_chars(shifted_texts, 50)
    cryptio.output_list(shifted_texts, "output.txt")


if __name__ == '__main__':
    main()
