from sys import argv

import format
import cryptio
import shift_cipher
import frequency
from alphabets import ENGLISH_ALPHABET

default_text = '''QYUJH DATUV UMUPR EEHFU GNFGQ YUVYH DUHID AQQDU YNFLD UQHFY
NGPUU QYUGV AQYPY HTCUG TRMAH PAQXN FGADD GAPLR APUGU WTAQU
EUFQF HOHGX VNPQU GQYUA MOMUN QYJMU QUFGA FLQHI UUDSU MXPNG
NOHRQ QYUMA GGDUP IHMQY UXYNG OUUFE HPQRF JHJRD NMUDG UMDXE
MNFGE MPMAG GDUYN GOUUF MATYP FHOOA PYNFG MRGUN FGQYU AMLMH
VFRJP HFQHE YNGOU UFAIN FXQYA FLVHM PUNDD QYUSA DDNLU MPTNM
UGNOH RQVNP QYUAG UFQAQ XHIQY UAMER MGUMU MIHMJ DNAFD XQYMU
UNJJN MUFQD XYUND QYXJU HJDUG AGFHQ NDDGM HJGUN GHIFN QRMND
TNRPU PHFQY UPNEU FALYQ QYUYN FLUGE NFQYU SADDN LUJRO GAGNM
HNMAF LQMNG UQYNQ FALYQ QYUVY HDUSA DDNLU PUUEU GQHYN SUQRM
FUGHR QQHGA PTRPP QYUER MGUMP QYUXV UMUMU VNMGU GIHMD UNSAF
LQYUA MIAMU PAGUP VYUFQ YUMAG GDUPT HHCNM MASUG GMNEN QATND
DXAFQ YUAME AGPQN FGNFF HRFTU GQHQY UPRGG UFDXP ADUFQ JROQY
NQNEN FTNDD UGIMN FCOMX TUYNG BRPQO UUFNM MUPQU GIMNF CTMAU
GPUSU MNDJU HJDUF USUMI MNFCO MXTUV NPQYU MAGGD UPLNM GUFUM
YUDAS UGNDH FUAFN MRFGH VFTHQ QNLUH FQYUL MHRFG PHIQY UMAGG
DUYHR PUIMN FCYNG THEUO NTCIM HEQYU VNMVA QYNSU MXPQA IIDUL
NFGNL MUNQG APDAC UHITM HVGPN FGDHR GFHAP UPNFG YNGOU UFVHM
CAFLI HMQYU MAGGD UPUSU MPAFT UWWWW'''

def main():
    argc = len(argv)

    if argc > 2:
        print("ERROR: Can pass a maximum of one argument (enciphered text)")
        return
    elif argc == 2:
        encrypted: str = argv[1]
    else:
        encrypted = cryptio.get_input()

    if not encrypted or encrypted == "" or encrypted == "\n":
        encrypted = default_text

    cleaned: str = format.clean_input(encrypted)

    shifted_texts: list[str] = shift_cipher.enumerate_shift(cleaned, ENGLISH_ALPHABET)

    print("shifted: ")
    cryptio.print_list_first_n_chars(shifted_texts, 50)
    cryptio.output_list(shifted_texts, "output.txt")

    counts = frequency.count_text_chars(cleaned)
    frequency.display_counts(counts)




if __name__ == '__main__':
    main()
