import { createEffect, createSignal } from "solid-js"

const Home = () => {
    const [val, setVal] = createSignal('')
    createEffect(()=>{
        console.log(val())
        document.title = val()
    })
    return (
        <div>
            <input type="text" value={val()} onChange={e => setVal(e.target.value)} />
        </div>
    )
}

export default Home
