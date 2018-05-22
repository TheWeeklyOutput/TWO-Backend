from weasyprint import HTML

import os
import sys

class Wrapper:
  options = {
        'page-size': 'A4',
        'margin-top': '0.75in',
        'margin-right': '0.75in',
        'margin-bottom': '0.75in',
        'margin-left': '0.75in',
        'encoding': "UTF-8",
        'no-outline': None,
    }

  def __init__(self, *args, **kwargs):
    self.update_options(**kwargs)

  def update_options(self, **options):
    for key, val in options.items():
      key.replace('_', '-')
      self.options[key] = val

  def from_file(self, file_path, out_path=None, css=None):
      pdf = HTML(file_path)
      if out_path is not None:
          pdf.write_pdf(out_path)
      return pdf.write_pdf()

  def from_string(self, string, out_path=None, css=None):
      pdf = HTML(string=string.encode('utf-8'))
      if out_path is not None:
          pdf.write_pdf(out_path)
      return pdf.write_pdf()
