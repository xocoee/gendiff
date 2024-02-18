### Hexlet tests and linter status:

[![Actions Status](https://github.com/xocoee/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)]
(https://github.com/xocoee/frontend-project-46/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/9cc2deba04ccc8ca470f/maintainability)] 
(https://codeclimate.com/github/xocoee/frontend-project-46/maintainability)

[![Test Coverage] (https://api.codeclimate.com/v1/badges/9cc2deba04ccc8ca470f/test_coverage)]
(https://codeclimate.com/github/xocoee/frontend-project-46/test_coverage)


### genDiff, the command-line utility.

genDiff is a robust command-line tool that allows users to compare two files, whether they are in JSON or YAML format, and generate the output in three distinct formats: **stylish**, **plain**, and **JSON**.

With genDiff, users can effortlessly identify variances between two files, simplifying the tasks of debugging and code maintenance.

## Usage

For a rapid overview of program options, utilize: **gendiff -h**

### Output

To compare two files and display the result in stylish format, employ the following command: **gendiff <filepath1> <filepath2>**
### Example of work:
[![asciicast](https://asciinema.org/a/oaqJ43VFdgJehtshoZ6x5gqDL.svg)](https://asciinema.org/a/oaqJ43VFdgJehtshoZ6x5gqDL)

### Plain Output

To compare two files and display the result in plain format, use the following command: **gendiff plain <filepath1> <filepath2>  -f plain**
### Example of work:
[![asciicast](https://asciinema.org/a/HHKqbxdluA5kzkF4U8TpjHXnG.svg)](https://asciinema.org/a/HHKqbxdluA5kzkF4U8TpjHXnG)

### JSON Output

To compare two files and output the result in JSON format, use the following command: **gendiff <filepath1> <filepath2>  -f json(JSON)**
### Example of work:
[![asciicast](https://asciinema.org/a/C8prhbUGq6ipEhUvqHFPT5EmG.svg)](https://asciinema.org/a/C8prhbUGq6ipEhUvqHFPT5EmG)
