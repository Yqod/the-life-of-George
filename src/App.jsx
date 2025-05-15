import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

export default function App() {
    
    const reversedData = [...data].reverse();

    const entryElements = reversedData.map((entry) => (
        <Entry key={entry.id} entry={entry} />
    ));
    
    return (
        <>
            <Header />
            <main className="container">
                {entryElements}
            </main>
        </>
    )
  
}