import Gridview from './components/GridView.mjs';



const Fgta5 = {
	GridView: Gridview,
}


// install to window.$validators
if (window.$validators === undefined) {
	window.$validators = Validators;
} else {
	Object.assign(window.$validators, Validators);
}

// install to window.$fgta5
if (window.$fgta5===undefined || window.$fgta5===null) {
	window.$fgta5 =  Fgta5form
} else {
	Object.assign(window.$fgta5, Fgta5form)
}










