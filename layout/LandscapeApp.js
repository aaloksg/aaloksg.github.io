const template = /*html*/`
<div id="nav-bar">
    <div class="nav-item" @click="onNavigate('bio')" :class="[navIndex === 'bio' ? 'active' : '']">
        <p>Bio</p>
    </div>
    <div class="nav-item" @click="onNavigate('publication')" :class="[navIndex === 'publication' ? 'active' : '']">
        <p>Publication</p>
    </div>
    <div class="nav-item" @click="onNavigate('projects')" :class="[navIndex === 'projects' ? 'active' : '']">
        <p>Projects</p>
    </div>
</div>
<div class="content">
    <div v-if="navIndex === 'bio'" class="intro">
        <div class="bio">
            <h1 class="centered">Aalok Shashidhar Gokhale</h1>
            <p class="desc centered">
                <strong>Frontend Web Developer</strong> with a passion for Virtual Reality, Visualization, and JavaScript.
            </p>
            <p class="desc centered">
                <strong>MSc</strong> in <strong>Human Computer Interaction</strong>, Bauhaus Universität, Weimar, Germany. 
            </p>
            <p class="desc centered">
                <strong>B.E.</strong> in <strong>Electronics and Communication Engineering</strong>, Visvesvaraya Technological University, India.
            </p>
        </div>
        <div class="image">
            <img class="bio-image landscape-images" src="./images/bio-image.png" />
            <div class="links">
                <a class="anchor-icons" title="https://www.linkedin.com/in/aalok-gokhale-b2031560/" href="https://www.linkedin.com/in/aalok-gokhale-b2031560/" target="_blank">
                    <i class="icons fa fa-linkedin-square" style="font-size:40px"></i>
                </a>
                <a class="anchor-icons" title="mailto:aaloksg@gmail.com" href="mailto:aaloksg@gmail.com">
                    <i class="icons fa fa-envelope" style="font-size:40px"></i>
                </a>
                <a class="anchor-icons" title="https://instagram.com/aaloksg?igshid=ZGUzMzM3NWJiOQ==" href="https://instagram.com/aaloksg?igshid=ZGUzMzM3NWJiOQ==" target="_blank">
                    <i class="icons fa fa-instagram" style="font-size:40px"></i>
                </a>
            </div>
        </div>
    </div>
    <div v-if="navIndex === 'publication'">
        <div class="publication">
            <h2>Publication</h2>
            <div class="publication-desc">
                <p class="desc">
                    <a class="link-in-text" title="https://doi.org/10.1109/TVCG.2023.3247114" href="https://doi.org/10.1109/TVCG.2023.3247114" target="_blank">
                        <strong>Gaining the High Ground: Teleportation to Mid-Air Targets in Immersive Virtual Environments</strong>
                    </a>
                </p>
                <ImageModaller class="landscape-image-parent" image-src="./images/SimultaneousTech.png" v-slot="{ onClick }"
                caption="A still of the Simultaneous technique in use" >
                    <div style="text-align: center">
                        <img class="landscape-images"
                            src="./images/SimultaneousTech.png"  
                            v-on:click="onClick"/>
                    </div>
                </ImageModaller>
                <p class="desc">
                    This work received an <a class="link-in-text" title="https://ieeevr.org/2023/awards/conference-awards/#conference-honorable" href="https://ieeevr.org/2023/awards/conference-awards/#conference-honorable" target="_blank"><i>Honourable Mention for the Best Paper</i></a> at the <a class="link-in-text" title="https://ieeevr.org/2023/awards/conference-awards/" href="https://ieeevr.org/2023/awards/conference-awards/" target="_blank"><i>IEEE VR 2023 Conference Awards</i></a>.
                </p>       
                <p class="desc">
                    The body of work that went into my Master's thesis laid the foundation for this research paper.
                </p>
                <ImageModaller class="landscape-image-parent" image-src="./images/3DJumping.png" v-slot="{ onClick }"
                caption="A still of the Anchor Ray technique in use" >
                    <div style="text-align: center">
                        <img class="landscape-images"
                            src="./images/3DJumping.png"  
                            v-on:click="onClick"/>
                    </div>
                </ImageModaller>
                <p class="desc">
                    I created <a class="link-in-text" title="https://www.youtube.com/playlist?list=PLWKagjo38Yl6N4rg7DZAn5rdys1O4ml-Y" href="https://www.youtube.com/playlist?list=PLWKagjo38Yl6N4rg7DZAn5rdys1O4ml-Y" target="_blank"><i>three novel mid-air jumping techniques</i></a>, and designed and conducted an exploratory study to evaluate and compare the techniques for various quality factors.
                </p>
            </div>
        </div>
    </div>
    <div v-if="navIndex === 'projects'">
        <div class="projects">
            <h2>Projects</h2>
            <div class="desc-parent">
                <p class="desc">
                    <strong>Mobile Information Visualization Project</strong>
                </p>
                <p class="desc">
                    In a team of four, I researched common mobile problems faced, designed a style-guide to combat said problems, and <a class="link-in-text" title="Download the app - https://moin.vrsys.org/MoInVisApp.apk" href="https://moin.vrsys.org/MoInVisApp.apk" target="_blank"><i>built an app</i></a> that displayed the amounts of different kinds of waste generated by European countries, using a parallel coordinates visualization. 
                    <a class="link-in-text" title="https://moin.vrsys.org/" href="https://moin.vrsys.org/" target="_blank"><i>Check it out with a mobile browser here!</i></a>
                </p>
            </div>
            <div class="desc-parent">                
                <p class="desc">
                    <strong>F1 Data Visualization with ParaCoords</strong>
                </p>
                <ImageModaller image-src="./images/F1Viz.png" 
                    caption="A visualisation of the trajectory of the 2004 Monaco Grand Prix" 
                    v-slot="{ onClick }">
                    <div style="text-align: center">
                        <img class="landscape-images"
                            src="./images/F1Viz.png"  
                            v-on:click="onClick"/>
                    </div>
                </ImageModaller>
                <p class="desc">
                    In a team of two, I created a <a class="link-in-text" title="./F1DataVis/index.html" href="./F1DataVis/index.html" target="_blank"><i>parallel coordinates visualization</i></a> 
                    to visualize the journeys of Formula1 teams in each season over the years, and the stories of F1 drivers in each grand prix.
                </p>
            </div>
            <div class="desc-parent">
                <p class="desc">
                    <strong>Technology in the Home – Modern Technology and Spirituality</strong>
                </p>
                <ImageModaller image-src="./images/ModernTech-Spirituality-Poster.png" 
                    caption="A poster summarising the study" 
                    v-slot="{ onClick }">
                    <div style="text-align: center">
                        <img class="landscape-images"
                            src="./images/ModernTech-Spirituality-Poster.png"  
                            v-on:click="onClick"/>
                    </div>
                </ImageModaller>
                <p class="desc">
                In a team of 3, I used qualitative research methods to study how modern technology influences one’s 
                spiritual practices in the home. 
                </p>
                <p class="desc">
                Technological improvements have impacted the way we do
                everyday activities at home, including one's spiritual practices. We conducted ten semi-structured interviews
                with Christian (Protestant and Catholic), Islamic, and Hindu participants from various age groups, with various levels of expertise in
                technological use. 
                </p>
                <p class="desc">
                We collected in-depth information that can
                guide future designs for spirituality-relevant applications.                
                </p>
            </div>
        </div>
    </div>
</div>
<div class="column-parent">
    <div class="column-left">
        
    </div>
    <div class="column-right">
        <div class="column-right-content">
            
        </div>
    </div>
</div>
`;
import { defineComponent, ref } from 'vue'
import ImageModaller from './ImageModaller.js';
export default defineComponent({
    name: 'LandscapeApp',
    components: {
        ImageModaller,
    },
    setup() {
        // Nav-ids {
        //     'bio'
        //     'publication'
        //     'projects'
        // }
        const navIndex = ref('bio');
        const onNavigate = (id) => {
            navIndex.value = id;
        };

        return {
            navIndex,
            onNavigate,
        };
    },
    template
});