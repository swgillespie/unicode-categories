mod tables;

pub trait UnicodeCategories : Sized + Copy {
    fn is_other_control(self) -> bool;
    fn is_other_format(self) -> bool;
    fn is_other_private_use(self) -> bool;
    fn is_letter_lowercase(self) -> bool;
    fn is_letter_modifier(self) -> bool;
    fn is_letter_other(self) -> bool;
    fn is_letter_titlecase(self) -> bool;
    fn is_letter_uppercase(self) -> bool;
    fn is_mark_spacing_combining(self) -> bool;
    fn is_mark_enclosing(self) -> bool;
    fn is_mark_nonspacing(self) -> bool;
    fn is_number_decimal_digit(self) -> bool;
    fn is_number_letter(self) -> bool;
    fn is_number_other(self) -> bool;
    fn is_punctuation_connector(self) -> bool;
    fn is_punctuation_dash(self) -> bool;
    fn is_punctuation_close(self) -> bool;
    fn is_punctuation_final_quote(self) -> bool;
    fn is_punctuation_initial_quote(self) -> bool;
    fn is_punctuation_other(self) -> bool;
    fn is_punctuation_open(self) -> bool;
    fn is_symbol_currency(self) -> bool;
    fn is_symbol_modifier(self) -> bool;
    fn is_symbol_math(self) -> bool;
    fn is_symbol_other(self) -> bool;
    fn is_separator_line(self) -> bool;
    fn is_separator_paragraph(self) -> bool;
    fn is_separator_space(self) -> bool;

    #[inline]
    fn is_other(self) -> bool {
        self.is_other_control()
            || self.is_other_format()
            || self.is_other_private_use()
    }

    #[inline]
    fn is_letter(self) -> bool {
        self.is_letter_lowercase()
            || self.is_letter_modifier()
            || self.is_letter_other()
            || self.is_letter_titlecase()
            || self.is_letter_uppercase()
    }

    #[inline]
    fn is_mark(self) -> bool {
        self.is_mark_spacing_combining()
            || self.is_mark_enclosing()
            || self.is_mark_nonspacing()
    }

    #[inline]
    fn is_number(self) -> bool {
        self.is_number_decimal_digit()
            || self.is_number_letter()
            || self.is_number_other()
    }

    #[inline]
    fn is_punctuation(self) -> bool {
        self.is_punctuation_connector()
            || self.is_punctuation_dash()
            || self.is_punctuation_close()
            || self.is_punctuation_close()
            || self.is_punctuation_final_quote()
            || self.is_punctuation_initial_quote()
            || self.is_punctuation_other()
            || self.is_punctuation_open()
    }

    #[inline]
    fn is_symbol(self) -> bool {
        self.is_symbol_currency()
            || self.is_symbol_modifier()
            || self.is_symbol_math()
            || self.is_symbol_other()
    }

    #[inline]
    fn is_separator(self) -> bool {
        self.is_separator_line()
            || self.is_separator_paragraph()
            || self.is_separator_space()
    }
}

fn table_binary_search(target: char, table: &'static [char]) -> bool {
    table.binary_search(&target).is_ok()
}

impl UnicodeCategories for char {
    #[inline]
    fn is_other_control(self) -> bool {
        table_binary_search(self, tables::OTHER_CONTROL)
    }

    #[inline]
    fn is_other_format(self) -> bool {
        table_binary_search(self, tables::OTHER_FORMAT)
    }

    #[inline]
    fn is_other_private_use(self) -> bool {
        table_binary_search(self, tables::OTHER_PRIVATE_USE)
    }

    #[inline]
    fn is_letter_lowercase(self) -> bool {
        table_binary_search(self, tables::LETTER_LOWERCASED)
    }

    #[inline]
    fn is_letter_modifier(self) -> bool {
        table_binary_search(self, tables::LETTER_MODIFIER)
    }

    #[inline]
    fn is_letter_other(self) -> bool {
        table_binary_search(self, tables::LETTER_OTHER)
    }

    #[inline]
    fn is_letter_titlecase(self) -> bool {
        table_binary_search(self, tables::LETTER_TITLECASE)
    }

    #[inline]
    fn is_letter_uppercase(self) -> bool {
        table_binary_search(self, tables::LETTER_UPPERCASE)
    }

    #[inline]
    fn is_mark_spacing_combining(self) -> bool {
        table_binary_search(self, tables::MARK_SPACE_COMBINING)
    }

    #[inline]
    fn is_mark_enclosing(self) -> bool {
        table_binary_search(self, tables::MARK_ENCLOSING)
    }

    #[inline]
    fn is_mark_nonspacing(self) -> bool {
        table_binary_search(self, tables::MARK_NONSPACING)
    }

    #[inline]
    fn is_number_decimal_digit(self) -> bool {
        table_binary_search(self, tables::NUMBER_DECIMAL_DIGIT)
    }

    #[inline]
    fn is_number_letter(self) -> bool {
        table_binary_search(self, tables::NUMBER_LETTER)
    }

    #[inline]
    fn is_number_other(self) -> bool {
        table_binary_search(self, tables::NUMBER_OTHER)
    }

    #[inline]
    fn is_punctuation_connector(self) -> bool {
        table_binary_search(self, tables::PUNCTUATION_CONNECTOR)
    }

    #[inline]
    fn is_punctuation_dash(self) -> bool {
        table_binary_search(self, tables::PUNCTUATION_DASH)
    }

    #[inline]
    fn is_punctuation_close(self) -> bool {
        table_binary_search(self, tables::PUNCTUATION_CLOSE)
    }

    #[inline]
    fn is_punctuation_final_quote(self) -> bool {
        table_binary_search(self, tables::PUNCTUATION_FINAL_QUOTE)
    }

    #[inline]
    fn is_punctuation_initial_quote(self) -> bool {
        table_binary_search(self, tables::PUNCTUATION_INITIAL_QUOTE)
    }

    #[inline]
    fn is_punctuation_other(self) -> bool {
        table_binary_search(self, tables::PUNCTUATION_OTHER)
    }

    #[inline]
    fn is_punctuation_open(self) -> bool {
        table_binary_search(self, tables::PUNCTUATION_OPEN)
    }

    #[inline]
    fn is_symbol_currency(self) -> bool {
        table_binary_search(self, tables::SYMBOL_CURRENCY)
    }

    #[inline]
    fn is_symbol_modifier(self) -> bool {
        table_binary_search(self, tables::SYMBOL_MODIFIER)
    }

    #[inline]
    fn is_symbol_math(self) -> bool {
        table_binary_search(self, tables::SYMBOL_MATH)
    }

    #[inline]
    fn is_symbol_other(self) -> bool {
        table_binary_search(self, tables::SYMBOL_OTHER)
    }

    #[inline]
    fn is_separator_line(self) -> bool {
        table_binary_search(self, tables::SEPARATOR_LINE)
    }

    #[inline]
    fn is_separator_paragraph(self) -> bool {
        table_binary_search(self, tables::SEPARATOR_PARAGRAPH)
    }

    #[inline]
    fn is_separator_space(self) -> bool {
        table_binary_search(self, tables::SEPARATOR_SPACE)
    }
}

#[cfg(test)]
mod tests {
    use super::UnicodeCategories;

    #[test]
    fn is_other_control() {
        assert!('\0'.is_other_control());
        assert!('\u{007F}'.is_other_control());
        assert!(!'f'.is_other_control());
    }

    #[test]
    fn is_other_format() {
        assert!('؁'.is_other_format());
        assert!(!'0'.is_other_format());
    }

    #[test]
    fn is_other_private_use() {
        assert!('\u{F8FF}'.is_other_private_use());
        assert!(!'n'.is_other_private_use())
    }

    #[test]
    fn is_letter_lowercase() {
        assert!('q'.is_letter_lowercase());
        assert!(!'N'.is_letter_lowercase());
    }

    #[test]
    fn is_letter_modifier() {
        assert!('ˢ'.is_letter_modifier());
        assert!(!'m'.is_letter_modifier());
    }
}
