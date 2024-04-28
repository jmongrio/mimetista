import { CardCustomer } from "../components/card-customer";
import { CardProject } from "../components/card-project";
import { CardService } from "../components/card-service";
import { CardTeam } from "../components/card-team";
import { ContactForm } from "../components/contact-form";
import { Header } from "../components/header";
import "./home.css";

export function Home() {
    return (
        <>
            <div className="positivon-relative">
                <div className="container">
                    <Header />
                </div>
                <section className="bg-white white-section text-center py-4">
                    <span><strong>Somos una agencia dedicada a impulsar el éxito de tu marca a través de una identidad visual única y trascendental.</strong></span> <br />
                    <span>Combinando <span className="text-custom-primary">creatividad y experiencia</span> para convertir tu <span className="text-custom-primary">visión en una realidad</span> que destaque en el mercado.</span>
                </section>
                <section className="bg-custom-secondary container py-5">
                    <div className="col-md-6">
                        <div className="d-flex flex-column align-items-start">
                            <span className="h1 fw-bold">Visiones que Trascienden</span>
                            <span className="h1 fw-bold">en Marcas <strong className="h1 text-custom-primary">Memorables</strong></span>
                            <button className="btn btn-danger px-5 align-self-center mt-4 btn-custom-shape">Ver Proyectos</button>
                        </div>
                    </div>
                </section>
                <section className="bg-white white-section py-5 section-shape-top">
                    <div className="container d-flex justify-content-end">
                        <div className="col-md-6">
                            <div className="d-flex flex-column">
                                <span className="h1 fw-bold">Diseñamos Marcas</span>
                                <span className="text-custom-primary h1 fw-bold" >Trascendentales</span>
                                <span className="text-wrap" >"En un océano de opciones, tu marca debe ser el faro que guie a tus clientes hacia ti. En nuestra agencia de branding, nos especializamos en descubrir la esencia de tu empresa, organización o institución, y transformarla en una marca que destaque, que inspire y que perdure en la memoria de tu audiencia.</span>
                                <span className="mt-4 text-wrap" >No se trata solo de destacar, se trata de dejar una impresión duradera. Permitenos ayudarte a marcar la diferencia y alcanzar tus objetivos."</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-white white-section py-5 section-shape-bottom" id="section-services">
                    <div className="container">
                        <div className="d-flex flex-column">
                            <span className="h1 fw-bold text-center">¡Nuestros Servicios!</span>
                            <span className="mb-4 text-center">Te ofrecemos servicios que transformaran tu visión en realidad.</span>
                        </div>
                        <div className="d-flex justify-content-center flex-responsibe">
                            <CardService title='Identidad Visual' body='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat' />
                            <CardService title='Landing Page' body='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat' />
                            <CardService title='Ilustración' body='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat' />
                        </div>
                        <div className="d-flex justify-content-center flex-responsibe">
                            <CardService title='Creación de Marca' body='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat' />
                            <CardService title='Sitio Web' body='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat' />
                            <CardService title='Marketing' body='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat' />
                        </div>
                    </div>
                </section>
                <section className="bg-custom-secondary container py-5">
                    <div className="row mb-4">
                        <span className="text-center h1">¡Vivencias</span>
                        <span className="text-center h1 fw-bold">Trascendentales!</span>
                        <span className="text-center">Aquí te presentamos las vivencias compartidas por nuestros clientes, las verdaderas marcas que decidieron trascender.</span>
                    </div>
                    <div className="d-flex justify-content-center flex-responsibe">
                        <CardCustomer image="https://via.placeholder.com/50" imageAlt="customer" title="Cliente" body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat" />
                        <CardCustomer image="https://via.placeholder.com/50" imageAlt="customer" title="Cliente" body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat" />
                        <CardCustomer image="https://via.placeholder.com/50" imageAlt="customer" title="Cliente" body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat" />
                    </div>
                </section>
                <section className="bg-custom-primary py-5">
                    <div className="d-flex flex-column">
                        <span className="h1 fw-bold mb-2 text-white text-center">¡Nuestro Equipo!</span>
                        <span className="mb-4 text-white text-center">Somos los especialistas de trascender tu marca.</span>
                        <div className="d-flex mt-4 justify-content-center flex-responsibe">
                            <div>
                                <CardTeam />
                            </div>
                            <div className="mx-5">
                                <CardTeam />
                            </div>
                            <div>
                                <CardTeam />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="section-projects" className="py-5 container">
                    <div className="d-flex flex-responsibe mt-4">
                        <CardProject image="https://via.placeholder.com/200" imageAlt="customer" body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit" />
                        <CardProject image="https://via.placeholder.com/200" imageAlt="customer" body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit" />
                        <CardProject image="https://via.placeholder.com/200" imageAlt="customer" body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit" />
                    </div>
                </section>
                <section>
                    <div className="d-flex justify-content-center py-5">
                        <div className="col-10 col-md-4">
                            <div className="d-flex flex-column">
                                <span className="text-center">¡haciendo posible lo imposible, una historia a la vez!</span>
                                <span className="h1 fw-bold text-center mb-4">¡Cuentanos tu Historia!</span>
                                <button className="btn btn-danger px-5 align-self-center mt-4 btn-custom-shape">Enviar Whatsapp</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="section-contact">
                    <div className="d-flex container justify-content-center py-5 flex-responsibe">
                        <div className="col-10 col-md-4 d-flex flex-column mx-auto mb-4">
                            <h2 className="text-custom-primary fw-bold">Cotiza con Nosotros</h2>
                            <span className="h2">Y Llevaremos tu Visión</span>
                            <span className="h2">a la Realidad</span>
                        </div>
                        <div className="col-10 col-md-4 mx-auto">
                            <ContactForm />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}