while True:
        try:
                link = input ( "Please, Enter the The Bible Verse's Link: " ).strip ()
                linkSplitAtEquals = link.split("=")
                version = linkSplitAtEquals[len(linkSplitAtEquals) - 1]
                reference = str ( input ( "Please, Enter the The Bible Verse's Reference: " ).strip () )
                verseNumbers = reference.split ( ":" )[len ( reference.split ( "." ) )]
                verseNumbers += "-"
                verseNumber = verseNumbers.split('-')[0]
                verse = input ( "Please, Enter the The Bible Verse: " ).strip ()
                verse = verse.replace("“", "\"")
                verse = verse.replace("”", "\"")
                verse = verse.replace("’", "\'")
                verse = verse.replace("‘", "\'")
                verse = verse.replace("—", " &#8212; ")
                print(f"\n\t\t\t<!--{reference}-->")
                print(f"\t\t\t<p><sup>{verseNumber} </sup>{verse} <nobr>" )
                print(f"\t\t\t<a href=\"{link}\" target=\"_blank\">{reference}</a> ({version}) </nobr></p>\n" )
        except:
                print("Error.")