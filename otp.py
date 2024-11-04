def l2n(letter):
    return ord(letter) - ord("A")


def n2l(number):
    return chr((number % 26) + ord("A"))


def get_crib_keys(ciphertext, crib):
    candidates = []

    for i in range(len(ciphertext) - len(crib) + 1):
        key_fragment = []

        for j in range(len(crib)):
            c_letter = ciphertext[i + j]
            crib_letter = crib[j]

            char_num = (l2n(c_letter) - l2n(crib_letter)) % 26
            key_fragment.append(n2l(char_num))

        candidates.append((i, "".join(key_fragment)))

    return candidates


def decrypt_partial(ciphertext, partial_key, start_pos):
    plaintext = []
    key_length = len(partial_key)
    for i in range(start_pos, start_pos + key_length):
        key_char = partial_key[i - start_pos]
        shift_amount = l2n(key_char)
        decrypted_char = n2l((l2n(ciphertext[i]) - shift_amount) % 26)
        plaintext.append(decrypted_char)

    return "".join(plaintext)


cipher1 = "GCYRHMRQGNBEEQOURXKTJDXRAOPMVPAYOLQYTJTJDTNVBQCCKRCBPIVTOWVUWJKFDCKIFUNSHAZOWMXKFKLDQAOPEUKCXYCJKAABAWDFIXQJWZNBCXPBLQRAIRADGLZJTHSYGCHLIFSHPJMWVWVNHKODRYFWRRZY"
cipher2 = "GCYRHMRYZHEFMBXJIUPQZUHOTXQMWXRJSAVLETBUDEIDMNLOUEKSVFXTTJUCVNQJHBHVIAUKHJCIETWKQHJHTMVSMDTLNUGERJNUVAPXGXHCOPNFNDTYDIZPJJRWEXLHDGIUUVORIIBSENZHQABREADLLLKLPHPT"
cipher3 = "ISWEYBWYYQJABYVOLNCNXBKNRIAGSEVGWMDXSZVZBTCWRDESBRCAHFEFDUVMFJKZXEHTLMCWZXXTSLJXNQVOWIFYAWJMRJBPONLCUULGLZACJPLOPDBUCEEFKLJRMWKESHSEMASESDJWENZHQWWSYUZRXHENYGJC"

pos = input("Position: ")
if len(pos) == 0:
    pos = 61
else:
    pos = int(pos)

while True:
    crib_input = input("Crib: ")

    if len(crib_input) == 0:
        break

    crib = crib_input.upper()

    key_candidates = get_crib_keys(cipher3, crib)

    key_pos, key_frag = key_candidates[pos]

    partial1 = decrypt_partial(cipher1, key_frag, key_pos)
    partial2 = decrypt_partial(cipher2, key_frag, key_pos)
    partial3 = decrypt_partial(cipher3, key_frag, key_pos)

    print(f"Key Pos {key_pos}: Key Frag = {key_frag}")

    print("Partial 1:", partial1)
    print("Partial 2:", partial2)
    print("Partial 3:", partial3)