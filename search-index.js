var searchIndex = {};
searchIndex['unicode_categories'] = {"items":[[0,"","unicode_categories","`unicode-categories` is a crate that adds extensions to the\n`char` primitive type that allow for a char to be queried\nabout whether or not it belongs to a particular Unicode category.",null,null],[8,"UnicodeCategories","","",null,null],[10,"is_other_control","","Returns `true` if this value is a member\nof the \"Other, Control\" (Cc) category.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[10,"is_other_format","","Returns `true` if this value is a member\nof the \"Other, Format\" (Cf) category.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[10,"is_other_private_use","","Returns true if this value is a member\nof the \"Other, Private Use\" (Co) category.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[10,"is_letter_lowercase","","Returns true if this value is a member\nof the \"Letter, Lowercase\" (Ll) category.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[10,"is_letter_modifier","","Returns true if this value is a member of\nthe \"Letter, Modifier\" (Lm) category.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[10,"is_letter_other","","Returns true if this value is a member of\nthe \"Letter, Other\" (Lo) category.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[10,"is_letter_titlecase","","Returns true if this value is a member of\nthe \"Letter, Titlecase\" (Lt) category.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[10,"is_letter_uppercase","","Returns true if this value is a member of\nthe \"Letter, Uppercase\" (Lu) category.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[10,"is_mark_spacing_combining","","Returns true if this value is a member of\nthe \"Mark, Spacing Combining\" (Mc) category.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[10,"is_mark_enclosing","","Returns true if this value is a member of\nthe \"Mark, Enclosing\" (Me) category.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[10,"is_mark_nonspacing","","Returns true if this value is a member of\nthe \"Mark, Nonspacing\" (Mn) category.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[10,"is_number_decimal_digit","","Returns true if this value is a member of\nthe \"Number, Decimal Digit\" (Nd) category.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[10,"is_number_letter","","Returns true if this value is a member of\nthe \"Number, Letter\" (Nl) category.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[10,"is_number_other","","Returns true if this value is a member of\nthe \"Number, Other\" (No) category.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[10,"is_punctuation_connector","","Returns true if this value is a member of\nthe \"Punctuation, Connector\" (Pc) category.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[10,"is_punctuation_dash","","Returns true if this value is a member of\nthe \"Punctuation, Dash\" (Pd) category.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[10,"is_punctuation_close","","Returns true if this value is a member of\nthe \"Punctuation, Close\" (Pe) category.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[10,"is_punctuation_final_quote","","Returns true if this value is a member of\nthe \"Punctuation, Final Quote\" (Pf) category.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[10,"is_punctuation_initial_quote","","Returns true if this value is a member of\nthe \"Punctuation, Initial Quote\" (Pi) category.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[10,"is_punctuation_other","","Returns true if this value is a member of\nthe \"Punctuation, Other\" (Po) category.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[10,"is_punctuation_open","","Returns true if this value is a member of\nthe \"Punctuation, Open\" (Ps) category.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[10,"is_symbol_currency","","Returns true if this value is a member of\nthe \"Symbol, Currency\" (Sc) category.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[10,"is_symbol_modifier","","Returns true if this value is a member of\nthe \"Symbol, Modifier\" (Sk) category.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[10,"is_symbol_math","","Returns true if this value is a member of\nthe \"Symbol, Math\" (Sm) category.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[10,"is_symbol_other","","Returns true if this value is a member of\nthe \"Symbol, Other\" (So) category.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[10,"is_separator_line","","Returns true if this value is a member of\nthe \"Separator, Line\" (Zl) category.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[10,"is_separator_paragraph","","Returns true if this value is a member of\nthe \"Separator, Paragraph\" (Zp) category.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[10,"is_separator_space","","Returns true if this value is a member of\nthe \"Separator, Space\" (Zs) category.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[11,"is_other","","Returns true if this value is a member of\na \"Other\" category: Cc, Cf, Cn, or Co.\nSurrogates cannot be `chars` in Rust, so\nthey are not included.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[11,"is_letter","","Returns true if this value is a member of\na \"Letter\" category: Lc, Ll, Lm, Lo, Lt, or Lu.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[11,"is_mark","","Returns true if this value is a member of a\n\"Mark\" category: Mc, Me, or Mn.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[11,"is_number","","Returns true if this value is a member of a\n\"Number\" category: Nd, Nl, or No.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[11,"is_punctuation","","Returns true if this value is a member of a\n\"Punctuation\" category: Pc, Pd, Pe, Pf, Pi, Po, or Ps.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[11,"is_symbol","","Returns true if this value is a member of a\n\"Symbol\" category: Sc, Sk, Sm, or So.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}],[11,"is_separator","","Returns true if this value is a member of a\n\"Separator\" category: Zl, Zp, or Zs.",0,{"inputs":[{"name":"unicodecategories"}],"output":{"name":"bool"}}]],"paths":[[8,"UnicodeCategories"]]};
initSearch(searchIndex);
