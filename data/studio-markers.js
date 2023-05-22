const red       = `hsl(10  70% 50%)`;
const mid_blue  = `hsl(195 70% 50%)`;
const dark_blue = `hsl(215 70% 50%)`;
const orange    = `hsl(30  70% 50%)`;
const purple    = `hsl(280 70% 50%)`;
const green     = `hsl(150 70% 50%)`;

const studios = [
    {
        studio: `<h2>John St Studios</h2>
        <p>...more info</p>`,
        color: `${red}`,
        lngLat: [-2.2167788, 51.7445037],
    },
    {
        studio: `<h2>Weven</h2>
        <p>...more info</p>`,
        color: `${red}`,
        lngLat: [-2.21798684, 51.74506395],
    },
    {
        studio: `<h2>Cacao Circle</h2>
        <p>...more info</p>`,
        color: `${red}`,
        lngLat: [-2.2170453, 51.7451129],
    },
    {
        studio: `<h2>High St</h2>
        <p>...more info</p>`,
        color: `${red}`,
        lngLat: [-2.21523121, 51.7451931],
    },
    // Route 2
    {
        studio: `<h2>Bath Road</h2>
        <p>...more info</p>`,
        color: `${red}`,
        lngLat: [-2.2221152, 51.744348],
    },
    {
        studio: `<h2>Marven St Chloe</h2>
        <p>...more info</p>`,
        color: `${mid_blue}`,
        lngLat: [-2.2185467, 51.7101307],
    },
    {
        studio: `<h2>Frogmarsh Mill</h2>
        <p>...more info</p>`,
        color: `${mid_blue}`,
        lngLat: [-2.2325759, 51.7154552],
    },
    {
        studio: `<h2>Article Studio</h2>
        <p>...more info</p>`,
        color: `${mid_blue}`,
        lngLat: [-2.2279565, 51.7085009],
    },
    {
        studio: `<h2>The Hide</h2>
        <p>...more info</p>`,
        color: `${mid_blue}`,
        lngLat: [-2.2190762, 51.7071444],
    },
    {
        studio: `<h2>The Nutshell Studios</h2>
        <p>...more info</p>`,
        color: `${mid_blue}`,
        lngLat: [-2.2191816, 51.695219],
    },
    {
        studio: `<h2>Three Storeys</h2>
        <p>...more info</p>`,
        color: `${mid_blue}`,
        lngLat: [-2.2191816, 51.695219],
    },
    // Route 3
    {
        studio: `<h2>Museum in the Park</h2>
        <p>...more info</p>`,
        color: `${dark_blue}`,
        lngLat: [-2.22542, 51.7506206],
    },
    {
        studio: `<h2>Studio Tuft</h2>
        <p>...more info</p>`,
        color: `${dark_blue}`,
        lngLat: [-2.2809237, 51.7460296],
    },
    // Route 4
    {
        studio: `<h2>Houseworkwork</h2>
        <p>...more info</p>`,
        color: `${orange}`,
        lngLat: [-2.21443438, 51.7465302],
    },
    {
        studio: `<h2>Landsdown Hall</h2>
        <p>...more info</p>`,
        color: `${orange}`,
        lngLat: [-2.2165839, 51.7463608],
    },
    {
        studio: `<h2>Stroud Pottery</h2>
        <p>...more info</p>`,
        color: `${orange}`,
        lngLat: [-2.2157922, 51.7472264],
    },
    {
        studio: `<h2>Lucy Inder</h2>
        <p>...more info</p>`,
        color: `${orange}`,
        lngLat: [-2.2165653, 51.7487422],
    },
    {
        studio: `<h2>Sam Marsh</h2>
        <p>...more info</p>`,
        color: `${orange}`,
        lngLat: [-2.2121959, 51.7504326],
    },
    {
        studio: `<h2>Andy Bradley</h2>
        <p>...more info</p>`,
        color: `${orange}`,
        lngLat: [-2.20618, 51.75065],
    },
    {
        studio: `<h2>Hawkwood</h2>
        <p>...more info</p>`,
        color: `${orange}`,
        lngLat: [-2.209216, 51.757352],
    },
    {
        studio: `<h2>The Camp</h2>
        <p>...more info</p>`,
        color: `${orange}`,
        lngLat: [-2.1268, 51.782792],
    },
    // Route 5
    {
        studio: `<h2>Unit 3</h2>
        <p>...more info</p>`,
        color: `${purple}`,
        lngLat: [-2.214399, 51.744668],
    },
    {
        studio: `<h2>Melvyn Warren-Smith</h2>
        <p>...more info</p>`,
        color: `${purple}`,
        lngLat: [-2.21411838, 51.74450015],
    },
    {
        studio: `<h2>Kath Williams</h2>
        <p>...more info</p>`,
        color: `${purple}`,
        lngLat: [-2.21247244, 51.7440431],
    },
    {
        studio: `<h2>Piccadilly Mill East</h2>
        <p>...more info</p>`,
        color: `${purple}`,
        lngLat: [-2.210000, 51.7436],
    },
    {
        studio: `<h2>Lower St</h2>
        <p>...more info</p>`,
        color: `${purple}`,
        lngLat: [-2.2103256, 51.7431577],
    },
    {
        studio: `<h2>Caroline Jamfrey</h2>
        <p>...more info</p>`,
        color: `${purple}`,
        lngLat: [-2.20706, 51.74235],
    },
    {
        studio: `<h2>Horns Rd</h2>
        <p>...more info</p>`,
        color: `${purple}`,
        lngLat: [-2.2070316, 51.7431274],
    },
    {
        studio: `<h2>Robert Garland</h2>
        <p>...more info</p>`,
        color: `${purple}`,
        lngLat: [-2.19346, 51.74321],
    },
    // Route 6
    {
        studio: `<h2>Trixter House</h2>
        <p>...more info</p>`,
        color: `${green}`,
        lngLat: [-2.2071928, 51.7377367],
    },
    {
        studio: `<h2>London Road</h2>
        <p>...more info</p>`,
        color: `${green}`,
        lngLat: [-2.2046, 51.73191],
    },
    {
        studio: `<h2>Polly Lyster</h2>
        <p>...more info</p>`,
        color: `${green}`,
        lngLat: [-2.174177, 51.732944],
    },
    {
        studio: `<h2>Victoria Works</h2>
        <p>...more info</p>`, // London Road
        color: `${green}`,
        lngLat: [-2.15227962, 51.72098032],
    },
]

export default studios;