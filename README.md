# Cyntax

A syntax highlighter for C code displayed in HTML.

## Themes

Currently, the only supported theme is the Dark+ theme from Visual Studio Code.

## Example Usage

The C code should be placed inside of a comment. This is to prevent any of the < characters from being rendered as HTML.

```html
<html>
    <head>
        <link rel="stylesheet" href="cyntax.css">
    </head>
    <body>
        <pre>
            <code>
<!--
#include <stdio.h>

int main()
{
	printf("Hello, world!\n);
	return 0;
}
-->
            </code>
        </pre>
        <script src="cyntax.js"></script>
    </body>
</html>
```