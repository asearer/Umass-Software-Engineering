def print_upper_words(words):
    """Print words in all caps on seperate lines.

        >>> print_upper_words(["she", "turned", "me", "into", "a", "newt"])
        SHE
        TURNED
        ME
        INTO
        A
        NEWT
    """

    for word in words:
        print(word.upper())


def print_upper_words2(words):
    """Print each word on a seperate line, in all caps if starts with N or n.

        >>> print_upper_words2(["herring", "Shrubbery", "Ni", "nu"])
        NI
        NU
    """

    for word in words:
        if word.startswith("n") or word.startswith("N"):
            print(word.upper())


def print_upper_words3(words, must_start_with):
    """Print each word on sep line, uppercased, if starts with one of given

        >>> print_upper_words3(["witch", "I", "GOT", "BETTER", "duck"],
        ...                   must_start_with=["I", "G", "B"])
        I 
        GOT 
        BETTER
    """

    for word in words:
        for letter in must_start_with:
            if word.startswith(letter):
                print(word.upper())
                break
