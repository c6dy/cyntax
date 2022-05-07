document.querySelectorAll("code").forEach(element => {
	cyntax_highlight(element);
});

function cyntax_highlight(code)
{
	let rules = 
	[	
		// {
		// 	regex 	: /()(?= )/g,
		// 	class 	: "cyntax_typedef"
		// },

		// {
		// 	regex 	: /()(?= )/g,
		// 	class 	: "cyntax_macro"
		// },

		{
			regex 	: /"(.+)"/g,
			class 	: "cyntax_string"
		},

		{
			regex 	: /'(.+)'/g,
			class 	: "cyntax_string"
		},

		{
			regex 	: /\b(NULL|null|true|TRUE|false|FALSE)(?=[^\w])/g,
			class 	: "cyntax_macro"
		},

		{
			regex 	: /(?<=#define )\w+/g,
			class 	: "cyntax_macro"
		},

		{
			regex 	: /(?<=#include )<.+>/g,
			class 	: "cyntax_include"
		},

		{
			regex 	: /(#if|#elif|#else|#endif|#ifdef|#ifndef|#define|#undef|#include|#line|#error|#pragma|#defined)(?= )/g,
			class 	: "cyntax_preprocessor"
		},	

		{
			regex 	: /(\/\/.*)/g,
			class 	: "cyntax_comment"
		},

		{
			regex 	: /(\/\*)(.|\n)+?(\*\/)/g,
			class 	: "cyntax_comment"
		},

		{
			regex 	: /\b(break|case|continue|default|do|else|for|goto|if|return|switch|volatile|while)(?= )/g,
			class 	: "cyntax_keyword"
		},

		{
			regex 	: /\w+?(?=\()/g,
			class 	: "cyntax_function"
		},

		{
			regex 	: /\b(?<!=[a-zA-Z])[0-9]+|(?<=[0-9])f|[0x][0-9]+/g,
			class 	: "cyntax_number"
		},

		{
			regex 	: /(?<=\bstruct )\w+/g,
			class 	: "cyntax_struct"
		},

		{
			regex 	: /\b(union|size_t|typedef|struct|static|sizeof|restrict|register|inline|extern|enum|const|char|unsigned char|signed char|int|unsigned int|short|unsigned short|long|unsigned long|float|double|long double|void|bool)(?= )/g,
			class 	: "cyntax_type"
		},

		{
			regex 	:  /[{}&;\(\)+\[\]\|\:\*\!\,]|->| < | > | % | = | == | != | <= | >= | \+= | -= | - |-| \/ |\.(?!(h>)|(h\"))/g,
			class 	: "cyntax_special"
		}
	];

	// Define a variable to store the comment
	let string;

	// Loop through the code's nodes and look for a comment
	for(let i = 0; i < code.childNodes.length; i++)
	{
		if(code.childNodes[i].nodeType == Node.COMMENT_NODE)
		{
			string = code.childNodes[i].data;
			break;
		} 
	}

	// Apply all rules
	for (let i = 0; i < rules.length; i++)
	{
		string = string.replace(rules[i].regex, `<span class=${rules[i].class}>$&</span>`);
	}

	// Replace all < characters that aren't opening span tags
	string = string.replace(/<(?!span|\/span)/g,'&lt;');

	// Replace the code's inner HTML with the formatted code
	code.innerHTML = string;
}