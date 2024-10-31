import { useState } from "react";
import "./style.css"
const Testamonails = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testamonails = [
      {
        quote: "This is the best product I've ever used!",
        author: "Jane Doe",
      },
      {
        quote: "I highly recommend this product to everyone!",
        author: "John Smith",
      },
      {
        quote: "This product has completely changed my life!",
        author: "Bob Johnson",
      },
    ];

    const goBack = () =>{
        setCurrentIndex((currentIndex + testamonails.length -1) % testamonails.length) 
    }

    const goNext = () =>{
        setCurrentIndex((currentIndex + 1) % testamonails.length)
    }
    return <section className="card">
        <section className="quote">
            {testamonails[currentIndex].quote}
        </section>
        <section className="author">
            - {testamonails[currentIndex].author}
        </section>

        <section className="btns-container">
            <button onClick={goBack}>Pre</button>
            <button onClick={goNext}>Next</button>
        </section>
    </section>
}


export default Testamonails