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
        name: "Play<span class='emph'>waze</span>",
        img: '<a target="blank" href="https://playwaze.com/"><img id="x1" class="project img-fluid" src="img/playwaze.jpg" alt="Playwaze"></a>',
        description: "<p>I worked as a <span class='emph'>front-end developer</span> at Playwaze, focusing on mobile <span class='emph'>responsive</span> behaviour, the creation of new pages, <span class='emph'>UX/UI</span> and content implementation and creation. A large part of this role was translating designs on paper over to a <span class='emph'>functional</span> layout. Skills used: C#, Razor, Jquery, Javascript, CSS, HTML, Github Extensions, all on an MVC Framework.</p>",
        button: "<a target='blank' href='https://playwaze.com/'><button type='button' class='btn project__btn btn-warning'>Click to view</button></a>"
    },
    x2 : {
        name: "Fantasy<span class='emph'> Road</span>",
        img: '<a target="blank" href="https://wrecket.github.io/Fantasy-Road-comic-book-store/"><img id="x2" class="project img-fluid" src="img/fantasyroad.jpg" alt="Fantasy Road Comic book store"></a>',
        description: "<p>Fantasy Road is an online <span class='emph'>ecommerce</span> platform, built and designed as a personal project. The site's purpose is an easy-to-use online store used for the buying and selling of comic books as a registered LTD company, This is <span class='emph'>fully functioning</span> and was built from the ground up, using html, CSS with SASS / Bootstrap 4 and Javascript with <span class='emph'>Jquery</span>.</p>",
        button: "<a target='blank' href='https://wrecket.github.io/grandmas-cookbook-original/'><button type='button' class='btn project__btn btn-warning'>Click to view</button></a>"
    },
    x3 : {
        name: "Ryan's <span class='emph'>Woodworks</span>",
        img: '<a target="blank"href="https://wrecket.github.io/ryans-woodworks-final-design/"> <img id="x3" class="project img-fluid" src="img/rwdesc.jpg" alt="Ryans Woodworks"></a>',
        description: "<p><span class='emph'>E-commerce</span> site made on request with guidelines. The sites purpose is to sell fully customisable handmade woodworks, and to promote the owners custom builds and personalisation business. Ryan's woodworks was built from the ground up, using bootstrap, HTML, CSS, Javascript, and the graphics editted and designed on photoshop.</p>",
        button: "<a target='blank' href='https://wrecket.github.io/ryans-woodworks-final-design/'><button type='button' class='btn project__btn btn-warning'>Click to view</button></a>"
    },
    x4 : {
        name: "<span class='emph'>G.M.C.B</span> React Conversion",
        img: '<a target="blank" href="https://wrecket.github.io/grandmascookbook.co.uk/"><img id="x4" class="project img-fluid" src="img/gmcbreact.JPG" alt="Gradient finder tool"></a>',
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
                this.classList.add("fadeOut");
                obj = this.id;
                this.style.opacity = 0;
                projectCard(obj);
                projects.style.opacity = 1;
                setTimeout(() => {
                    this.classList.remove("fadeOut"); 
                }, 1000);
            }, 1000);
        });
	});
});



