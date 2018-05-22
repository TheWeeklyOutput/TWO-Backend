import os

def print_file(file_path, printer=None):
  os.system('lpr {0} "{1}"'.format(
    "-P " + printer if printer is not None else "",
    file_path
  ))
  print('lpr {0} "{1}"'.format(
    ("-P " + printer) if printer is not None else "",
    file_path
  ))
