import React from 'react'
import {probono} from '../libs/probono.json'
import {TextBlockStyles} from "../stylesheets/style-components"
const Probono = () => {
    return (
        <TextBlockStyles>
        <div className="text-center">
        <h2 class="text-center mt-3">Pro Bono</h2>
        <hr className="mb-4" />
        </div>
        <div className="mb-5">
            {probono.map(text => (<p className="para-styled">{text}</p>))}
        </div>
      </TextBlockStyles>
    )
}

export default Probono
