let 	meta = [],
	ico = [],
	title = `Oaxaca Ocean Tours`;

meta[0] = `meta`;
meta[1] = {name:"viewport", content:"width=device-width, initial-scale=1.0"};

ico[0] = `link`;
ico[1] = {rel:"apple-touch-icon", sizes:"180x180", href:"./img/ico/apple-touch-icon.png"};
ico[2] = {rel:"icon", type: "image/png", sizes: "32x32", href:"./img/ico/favicon-32x32.png"};
ico[3] = {rel:"icon", type: "image/png", sizes: "16x16", href:"./img/ico/favicon-16x16.png"};
ico[4] = {rel:"manifest", href:"./img/ico/site.webmanifest"};

document.title = title;

function headElements(arrh)
{	
	for(var i = 1; i < arrh.length; i++)
	{
		var el = Object.assign(document.createElement(arrh[0]), arrh[i]);
		document.head.appendChild(el);
	}
	return;
}

headElements(meta);
headElements(ico);
