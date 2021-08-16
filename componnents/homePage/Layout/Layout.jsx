import Navigation from './Navigation'

export default function Layout(props) {
    return (
       <>
            <Navigation/>
            <main>
                {props.children}
            </main>
        </>
    )
}
