import { useState, useRef } from "react";
import PageLayout from "../components/PageLayout.tsx";

const Contact = () => {
    const [name, setName] = useState("");
    const emailRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const email = emailRef.current?.value;
        alert(`Name: ${name}, Email: ${email}`);
    };

    return (
        <PageLayout>
            <h2>📞 Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name (controlled): </label>
                    <input value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Email (uncontrolled): </label>
                    <input ref={emailRef} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </PageLayout>
    );
};

export default Contact;
