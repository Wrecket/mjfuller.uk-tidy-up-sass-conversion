const x1 = document.getElementById("x1");
const x2 = document.getElementById("x2");
const x3 = document.getElementById("x3");
const x4 = document.getElementById("x4");
const name = document.getElementById("name");
const img = document.getElementById("img");
const description = document.getElementById("description");
const button = document.getElementById("button");
const body = document.querySelector("body");
const nametop = document.querySelector(".nametop");

const projects = {
    x1 : {
        name: "Featherwold",
        img: '<a target="blank" href="https://wrecket.github.io/Featherwold-new-final/"><img id="x1" class="project img-fluid" src="img/featherdeskmob.jpg" alt="featherwold"></a>',
        description: "<p>Featherwold is an <span class='emph'>E-commerce</span> site, built and designed following the guidelines of a customer request. The site's purpose is to sell artisan bespoke cushions and fabrics. Featherwold was built from the ground up, using bootstrap, html, CSS, Javascript, and the logo/graphics created on Photoshop.<br><span class='emph'>Please note - This is a work in progress.</span></p>",
        button: "<a target='blank' href='https://wrecket.github.io/Featherwold-new-final/'><button type='button' class='btn project__btn btn-warning'>Click to view</button></a>"
    },
    x2 : {
        name: "Grandma's Cookbook",
        img: '<a target="blank" href="https://wrecket.github.io/GMCB-Final/"><img id="x2" class="project img-fluid" src="img/gmcb.JPG" alt="GMCB"></a>',
        description: "<p>Grandma's Cookbook is an online recipe-book, built and designed following the guidelines of a customer request.The site's purpose is an easy-to-use website for an elderly client, and was built from the ground up, using html, CSS and Javascript.<br> <span class='emph'>Please note - This is a work in progress.</span></p>",
        button: "<a target='blank' href='https://wrecket.github.io/GMCB-Final/'><button type='button' class='btn project__btn btn-warning'>Click to view</button></a>"
    },
    x3 : {
        name: "Ryan's Woodworks",
        img: '<a target="blank"href="https://wrecket.github.io/ryanswoodworksfinal/"> <img id="x3" class="project img-fluid" src="img/rwdesc.jpg" alt="Ryans Woodworks"></a>',
        description: "<p><span class='emph'>E-commerce</span> site made on request with guidelines. The sites purpose is to sell fully customisable handmade woodworks, and to promote the owners custom builds and personalisation business. Ryan's woodworks was built from the ground up, using bootstrap, HTML, CSS, Javascript, and the graphics editted and designed on photoshop.</p>",
        button: "<a target='blank' href='https://wrecket.github.io/ryanswoodworksfinal/'><button type='button' class='btn project__btn btn-warning'>Click to view</button></a>"
    },
    x4 : {
        name: "Grandma's Cookbook React Conversion",
        img: '<a href="https://wrecket.github.io/grandmascookbook.co.uk/"><img id="x4" class="project img-fluid" src="img/gmcbreact.JPG" alt="Gradient finder tool"></a>',
        description: "<p>React app conversion of the GMCB, made with dynamicly rendered components in a one-page application. Bootstrapped with <span class='emph'>create-react-app</span> and routed with <span class='emph'>react-router-dom</span>. This was built with Javascript, React, HTML and CSS with Bootstrap</p>",
        button: "<a href='https://wrecket.github.io/grandmascookbook.co.uk/'><button type='button' class='btn project__btn btn-warning'>Click to view</button></a>"
    }
}

function projectCard(id) {
	const p = projects[id];
	name.innerHTML = p.name;
	img.innerHTML = p.img;
    description.innerHTML = p.description;	
    button.innerHTML = p.button;
}

document.querySelectorAll('.project').forEach((item) => {
	item.addEventListener('mouseover', function() {
		obj = this.id;
        projectCard(obj);
        const remove = document.getElementById("remove");		
        remove.classList.add("hide");
	});
});

document.querySelectorAll('.float-proj').forEach((item) => {
	item.addEventListener('click', function() {
        const a = this.id;
        this.classList.remove(a);
        const projects = document.querySelector("#projects");
        projects.style.opacity = 0;
        document.querySelectorAll('.float-proj').forEach((item) => {
            const b = item.id;
            item.classList.add(b);
            item.style.opacity = 1;
            setTimeout(() => {
                this.classList.remove(a);
                this.classList.add("animate__fadeOut");
                obj = this.id;
                this.style.opacity = 0;
                projectCard(obj);
                projects.style.opacity = 1;
                setTimeout(() => {
                    this.classList.remove("animate__fadeOut"); 
                }, 1000);
            }, 1000);
        });
	});
});



