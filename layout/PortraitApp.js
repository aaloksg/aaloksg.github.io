const template = /*html*/`
<div class="section-parent">
    <Section class="bio" :height="sectionHeight">
        <h1>Aalok Shashidhar Gokhale</h1>
        <p class="desc bio-desc">
            I am a web developer at <a class="link-in-text" title="https://www.rooom.com/" href="https://www.rooom.com/" target="_blank">Rooom</a> 
            working on Frontend UI, and build 3D and virtual web experiences for the rooom 
            <a class="link-in-text" title="https://www.rooom.com/rooom-spaces" href="https://www.rooom.com/rooom-spaces" target="_blank">Spaces</a>
            and <a class="link-in-text" title="https://www.rooom.com/rooom-products" href="https://www.rooom.com/rooom-products" target="_blank">Products</a> team.
            
        </p>
        <p class="desc">
            <strong>Frontend Web Developer</strong> with a passion for Virtual Reality, Visualization, and JavaScript.
        </p>
        <p class="desc">
            <strong>MSc</strong> in <strong>Human Computer Interaction</strong>, Bauhaus Universität, Weimar, Germany. 
        </p>
        <p class="desc">
            <strong>B.E.</strong> in <strong>Electronics and Communication Engineering</strong>, Visvesvaraya Technological University, India.
        </p>
        <div class="image">
            <div class="links">
                <a class="anchor-icons" title="https://www.linkedin.com/in/aalok-gokhale-b2031560/" href="https://www.linkedin.com/in/aalok-gokhale-b2031560/" target="_blank">
                    <i class="icons fa fa-linkedin-square" style="font-size:36px"></i>
                </a>
                <a class="anchor-icons" title="mailto:aaloksg@gmail.com" href="mailto:aaloksg@gmail.com">
                    <i class="icons fa fa-envelope" style="font-size:32px"></i>
                </a>
                <a class="anchor-icons" title="https://instagram.com/aaloksg?igshid=ZGUzMzM3NWJiOQ==" href="https://instagram.com/aaloksg?igshid=ZGUzMzM3NWJiOQ==" target="_blank">
                    <i class="icons fa fa-instagram" style="font-size:36px"></i>
                </a>
            </div>
            <div class="image-parent">
                <img class="bio-image images-portrait" src="./images/bio-image.png"  />
            </div>
        </div>
    </Section>
    
    <Section class="publication" :height="sectionHeight">
        <h2>Publication</h2>
        <p class="desc">
            <a class="link-in-text" title="https://doi.org/10.1109/TVCG.2023.3247114" href="https://doi.org/10.1109/TVCG.2023.3247114" target="_blank">
                <strong>Gaining the High Ground: Teleportation to Mid-Air Targets in Immersive Virtual Environments</strong>
            </a>
        </p>
        <div class="desc-parent">
            <ImageModaller image-src="./images/SimultaneousTech.png" v-slot="{ onClick }"
                caption="A still of the Simultaneous technique in use" >
                <div style="text-align: center">
                    <img class="images-portrait" 
                    style="width: 90vw"
                        src="./images/SimultaneousTech.png"  
                        v-on:click="onClick"/>
                </div>
            </ImageModaller>
            <p class="desc">
                Three adaptations of the classic teleportation metaphor that enable the user to travel to mid-air targets are presented.
                The three techniques differ in the extent to which elevation changes are integrated into the conventional target selection process.
                Elevation can be specified either simultaneously, as a connected second step, or separately from horizontal movements.
                From the results of a user study with 30 participants, initial design guidelines for mid-air navigation techniques were defined.
            </p>
            <p class="desc">
                This work received an <a class="link-in-text" title="https://ieeevr.org/2023/awards/conference-awards/#conference-honorable" href="https://ieeevr.org/2023/awards/conference-awards/#conference-honorable" target="_blank"><i>Honourable Mention for the Best Paper</i></a> at the <a class="link-in-text" title="https://ieeevr.org/2023/awards/conference-awards/" href="https://ieeevr.org/2023/awards/conference-awards/" target="_blank"><i>IEEE VR 2023 Conference Awards</i></a>.
            </p>
            <p class="desc">
                The body of work that went into my Master's thesis - <strong>Mid-Air Jumping through Immersive Virtual Environments</strong>
                laid the foundation for this research paper.
            </p>
            <p class="desc">
                My thesis investigated how common jumping implementations can
                be extended to integrate the specification of height as an additional degree of freedom in
                target specification. Based on related research, I created 
                <a class="link-in-text" title="https://www.youtube.com/playlist?list=PLWKagjo38Yl6N4rg7DZAn5rdys1O4ml-Y" href="https://www.youtube.com/playlist?list=PLWKagjo38Yl6N4rg7DZAn5rdys1O4ml-Y" target="_blank">
                <i>three novel mid-air jumping techniques</i></a> to realize mid-air jumping – the Elevator Ray, 
                the Anchor Ray and the Height Ray. 
            </p>
            <p class="desc">
                An exploratory study was designed and conducted with 15 participants to evaluate and compare the three
                techniques for various quality factors.
                The results of the study indicated that all techniques performed adequately and successfully kept simulator
                sickness and feelings of vertigo or fear of heights to a minimum, and encouraged the investigation of a combination of
                the Anchor Ray and the Elevator Ray as a mid-air jumping technique.
            </p>
            <ImageModaller image-src="./images/3DJumping.png" v-slot="{ onClick }"
                caption="A still of the Anchor Ray technique in use" >
                <div style="text-align: center">
                    <img class="images-portrait" 
                    style="width: 90vw"
                        src="./images/3DJumping.png"  
                        v-on:click="onClick"/>
                </div>
            </ImageModaller>
        </div>
    </Section>
    
    <Section class="projects" :height="sectionHeight">
        <h2>Projects</h2> 
        <p class="desc">
            <strong>Mobile Information Visualization Project</strong>
        </p>
        <p class="desc">
            In a team of four, I researched common mobile problems faced, designed a style-guide to combat said problems, and <a class="link-in-text" title="Download the app - https://moin.vrsys.org/MoInVisApp.apk" href="https://moin.vrsys.org/MoInVisApp.apk" target="_blank"><i>built an app</i></a> that displayed the amounts of different kinds of waste generated by European countries, using a parallel coordinates visualization. 
            <a class="link-in-text" title="https://moin.vrsys.org/" href="https://moin.vrsys.org/" target="_blank"><i>Check it out with a mobile browser here!</i></a>
        </p>
        <p class="desc">
            <strong>F1 Data Visualization with ParaCoords</strong>
        </p>
        <div class="desc-parent">
            <ImageModaller image-src="./images/F1Viz.png" 
                caption="A visualisation of the trajectory of the 2004 Monaco Grand Prix" 
                v-slot="{ onClick }">
                <div style="text-align: center">
                    <img class="images-portrait" 
                    style="width: 90vw"
                        src="./images/F1Viz.png"  
                        v-on:click="onClick"/>
                </div>
            </ImageModaller>
            <p class="desc">
                In a team of two, I created a <a class="link-in-text" title="./F1DataVis/index.html" href="./F1DataVis/index.html" target="_blank"><i>parallel coordinates visualization</i></a> 
                to visualize the journeys of Formula1 teams in each season over the years, and the stories of F1 drivers in each grand prix.
            </p>
        </div>
    </Section>
    
    <Section class="projects" :height="sectionHeight">
        <h2>Projects</h2>
        <ImageModaller image-src="./images/ModernTech-Spirituality-Poster.png" v-slot="{ onClick }"
            caption="A poster summarising the study" 
            >
            <div style=" text-align: center">
                <img class="images-portrait"
                    style="width: 90vw"
                    src="./images/ModernTech-Spirituality-Poster.png"  
                    v-on:click="onClick"/>
            </div>
        </ImageModaller>
        <p class="desc">
            <strong>Technology in the Home – <i>Modern Technology and Spirituality</i></strong>
        </p>
        <div class="desc-parent">
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
    </Section>
</div>
<ScrollControls />

`;
import { ref, defineComponent, onMounted } from 'vue'
import ScrollControls from './ScrollControls.js';
import Section from './Section.js';
import ImageModaller from './ImageModaller.js';

export default defineComponent({
    name: 'PotraitApp',
    setup() {        
        const sectionHeight = ref('100vh');
        onMounted(() => {
            sectionHeight.value = `${window.innerHeight}px`;
            window.onresize = () => {
                sectionHeight.value = `${window.innerHeight}px`;
            }
        });
        return {
            sectionHeight
        }
    },
    components: {
        Section,
        ScrollControls,
        ImageModaller,
    },
    template
});