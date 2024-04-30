import { createContext, useEffect, useState} from "react";
import useFetch from "../Customhooks/useFetch";
import axios from "axios";
import img1 from '../Assets/volkswagen-brand.svg';
import img2 from '../Assets/samsung-brand.svg';
import img3 from '../Assets/cisco-brand.svg';
import img4 from '../Assets/att-brand.svg';
import img5 from '../Assets/procter-brand.svg';
import img6 from '../Assets/hewlett-brand.svg';
import img7 from '../Assets/citi-brand.svg';
import img8 from '../Assets/ericsson-brand.svg';
import cata1 from '../Assets/cloud.svg';
import cata2 from '../Assets/Devops.svg';
import cata3 from '../Assets/CyberSecurity.svg';
import cata4 from '../Assets/BiandVisulixation.svg';
import cata5 from '../Assets/Programming-Framework.svg';
import cata6 from '../Assets/DataScience.svg';
import testi1 from '../Assets/testi1.png';
import testi2 from '../Assets/testi2.png';
import testi3 from '../Assets/testi3.png';
import testi4 from '../Assets/testi4.png';
import testi5 from '../Assets/testi5.png';


export const Context = createContext(null);


export const ContextProvider = ({ children }) => {


    // const [post, setPost] = useState([]);
    // useEffect(() => {
    //     axios.get(`https://my-json-server.typicode.com/Thamaraiselvi2109/sample/courselist`)
    //         .then((response) => setPost(response.data))
    // })
    const BASE_URL =  `https://my-json-server.typicode.com/Thamaraiselvi2109/sample/courselist`
    const [post] = useFetch(BASE_URL);

    // counter
    const Counter = [
        {
            id: 1,
            name: "Students",
            num: "62M"
        },
        {
            id: 2,
            name: "Enterprises",
            num: "15,000+"
        },
        {
            id: 3,
            name: "Enrollments",
            num: "830M"
        },
        {
            id: 4,
            name: "Countries",
            num: "180+"
        },
        {
            id: 5,
            name: "Languages",
            num: "75+"
        }

    ]
    // features
    const Features = [
        {
            id: 1,
            "name": "Cloud",
            "img": cata1,
        },
        {
            id: 2,
            "name": "DevOps",
            "img": cata2,
        },
        {
            id: 3,
            "name": "Security",
            "img": cata3,
        },
        {
            id: 4,
            "name": "Visualization",
            "img": cata4,
        },
        {
            id: 5,
            "name": "Frameworks",
            "img": cata5,
        },
        {
            id: 6,
            "name": "Data Science",
            "img": cata6,
        }

    ]
    // patners
    const Patners = [
        {
            id: 1,
            "name": "volkswagen",
            "img": img1
        },
        {
            id: 2,
            "name": "samsung",
            "img": img2
        },
        {
            id: 3,
            "name": "cisco",
            "img": img3
        },
        {
            id: 4,
            "name": "att",
            "img": img4
        },
        {
            id: 5,
            "name": "procter",
            "img": img5
        },
        {
            id: 6,
            "name": "hewlett",
            "img": img6
        },
        {
            id: 7,
            "name": "citi",
            "img": img7
        },
        {
            id: 8,
            "name": "ericsson",
            "img": img8
        }
    ]
    // testimonials
    const TestimonaisJson = [
        {
            id: 1,
            name: "Vivek Yadav",
            Role: "Customer Project Manager",
            About: "Udemy has been a great platform to stay competitive in the digital transformation of the workplace by offering fresh, relevant, personalized on-demand learning content powered by a dynamic content marketplace. ",
            img: testi1
        },
        {
            id: 2,
            name: "Ganesh Bapurao",
            Role: " Specialist Engineer ",
            About: "Udemy has been a great platform to stay competitive in the digital transformation of the workplace by offering fresh, relevant, personalized on-demand learning content powered by a dynamic content marketplace. ",
            img: testi2
        },
        {
            id: 3,
            name: " Lins Varghese ",
            Role: "Project ManagerLead",
            About: "Udemy has been a great platform to stay competitive in the digital transformation of the workplace by offering fresh, relevant, personalized on-demand learning content powered by a dynamic content marketplace. ",
            img: testi3
        },
        {
            id: 4,
            name: "Satyabrata Barik",
            Role: "Senior Test Engineer",
            About: "Udemy has been a great platform to stay competitive in the digital transformation of the workplace by offering fresh, relevant, personalized on-demand learning content powered by a dynamic content marketplace. ",
            img: testi4
        },
        {
            id: 5,
            name: "Bhakat Raj Joshi",
            Role: "Customer Project Manager",
            About: "Udemy has been a great platform to stay competitive in the digital transformation of the workplace by offering fresh, relevant, personalized on-demand learning content powered by a dynamic content marketplace. ",
            img: testi5
        }
    ]
    const [customer, setCustomers] = useState([ ]);
    const [searchdata, setDatasearch] = useState([]);


    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/Thamaraiselvi2109/sample/courselist')
            .then((res) => {
                setDatasearch(res.data)
            })
    }, [])
    
    return (
        <Context.Provider value={{customer,setCustomers, Patners, Features, Counter, TestimonaisJson, post,searchdata}}>
            {children}
        </Context.Provider>
    )
}