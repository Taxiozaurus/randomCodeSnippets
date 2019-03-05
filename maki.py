import string

# Fancy word indexing program

def get_file():
    file_name = input("Document collection: ")
    return file_name


def get_data(file_name):
    doc_list = []
    try:
        with open(file_name, "r") as total_docs:
            current_doc_str = ""
            for line in total_docs:
                line = line.replace("\n", "").strip()
                if line != "<NEW DOCUMENT>":
                    current_doc_str += line + " "
                else:
                    if len(current_doc_str) > 1:
                        current_doc_str = current_doc_str.strip()
                        doc_list.append(current_doc_str)
                    current_doc_str = ""
            doc_list.append(current_doc_str)
            return doc_list
    except FileNotFoundError:
        print("Documents not found.")
        # split_docs = total_docs.split("<NEW DOCUMENT>")
        # for current_doc in total_docs:


def options_func():
    print("What would you like to do?")
    print("1. Search Documents")
    print("2. Print Document")
    print("3. Quit Program")
    choice = int(input())
    return choice


def choiceFunc(choice, doc_list):
    if choice == 1:
        processed_file = clean_file_func(doc_list)
        doc_dict = get_dictionary(processed_file)
        search_documents(doc_dict)
        # search_documents(doc_list, processed_file)
    elif choice == 2:
        document_chosen = int(input("Enter document number: "))
        print("Document #{}".format(document_chosen))
        print(doc_list[document_chosen])
    else:
        print("Exiting program.")


def get_dictionary(doc_list):
    doc_dict = {}
    for index, words in enumerate(doc_list):
        index_list = []
        for word in words.split():
            if word in doc_dict: #  and word not in index_list
                doc_dict[word].append(index)
                index_list.append(word)
            else:
                doc_dict[word] = [index]
    return dictionary_as_sets(doc_dict)


def clean_file_func(doc_list):
    clean_list = []
    totalwords = ""
    for doc in doc_list:
        doc_str = str(doc)
        for letter in doc_str:

            if letter in string.punctuation:
                continue
            else:
                letter = letter.lower()
                totalwords += letter
            # word = word.strip()
            # word = word.strip(string.punctuation)
            # word = word.replace("``", "").replace("''","")
        clean_list.append(totalwords)
        totalwords = ""
    return clean_list


def dictionary_as_sets(doc_dict):
    for key in doc_dict:
        set_form = set(doc_dict[key])
        doc_dict[key] = set_form
    return doc_dict


def search_documents(doc_dict):
    search_word = str(input("Enter search words: ")).lower()
    if search_word in doc_dict:
        print_line = ""
        for element in doc_dict[search_word]:
            print_line += str(element) + " "
        print_line = print_line.strip()
        print("Documents that fit search: {}".format(print_line))
    else:
        print("No match")


def main():
    choice = 1
    file_name = get_file()
    doc_list = get_data(file_name)
    while choice != 3:
        choice = options_func()
        choiceFunc(choice, doc_list)

    # read  file

    # process file

    # list options

    # search documents

    # print document

    # quit program


main()