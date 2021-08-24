....Brugte en times tid på at nægte at erkende, at 
NodeList ikke har en eventlistener-metode.
Den slags oplevelser er der såvist ikke noget nyt i.... 

Endte med at flytte click-eventet op på den div, der
ligger rundt om knapperne, og så fange den enkelte knap
via event.target og en button property ved navn 'localName',
fundet meeeget langt nede på property-listen.
