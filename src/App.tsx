import Button from "./components/Button";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {
    AppContainer,
    BoxContainer,
    FullscreenSection,
    ButtonList,
    CenteredBox
} from "./styles/AppStyles"

export const App = () => {
    return (
        <AppContainer>
            <FullscreenSection id="main" className="fullscreen">
                <div className="background"></div>
                <CenteredBox className="about">
                    <section className="me unset">
                        <img className="image-title" src="https://avatars.githubusercontent.com/u/40911019?v=4"/>
                        <div className="unset" style={{ margin: "0.5em" }}>
                            <Header title="jan leigh 🏮" />
                            <p className="undertitle victor-mono-i">
                                a self-taught full stack developer
                                <br/>
                                and linux enthusiast.
                            </p>
                        </div>
                    </section>
                    <ButtonList>
                        <Button text="github" href="https://github.com/" />
                        <Button text="twitter" href="https://twitter.com/KizuWasTaken/" color="#f49898" />
                        <Button text="more..." href="#about" color="#ff4757" shake={true} />
                    </ButtonList>
                </CenteredBox>
            </FullscreenSection>
            <section className="container">
                <BoxContainer id="about">
                    <Header title="about me." color="#f49898" />
                    <p className="victor-mono indent" style={{ textAlign: "left" }}>
                        hello! i'm jan leigh, a 16 year old self-taught full stack developer and linux enthusiast.<br/>
                        i'm also an avid <a href="https://genshin.mihoyo.com/en">genshin impact</a> player.
                    </p>
                    <Header title="technologies." color="#f49898" />
                    <p className="victor-mono indent" style={{ textAlign: "left" }}>
                        i have been doing programming for nearly <span className="peach-text">4 years.</span><br/>
                        in my whole programming life, i'm currently proficient at <span className="peach-text">node.js and typescript.</span>
                    </p>
                    <Header title="projects." color="#f49898" />
                    <p className="victor-mono">
                        <p className="indent" style={{ textAlign: "left" }}>
                            <a className="victor-mono-i" href="https://github.com/TheRealKizu/trace.moe.ts" target="_blank">trace.moe.ts</a>
                            - an api wrapper for <a href="https://trace.moe" target="_blank">trace.moe</a>.<br/>
                        </p>
                    </p>
                </BoxContainer>
            </section>
            <Footer author="TheRealKizu"/>
        </AppContainer>
    )
}

export default App;