import Carousel from 'react-bootstrap/Carousel';

function Carousell() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousell"
                    src="https://cdn.shopify.com/s/files/1/0516/0760/1336/files/global-banner_e49b0bed-6635-4bb0-8175-f7bd9e66e68d.jpg?v=1679565277"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousell"
                    src="https://cdn.shopify.com/s/files/1/0516/0760/1336/files/global-banner_02c5dbd6-d40a-4c27-832d-59a6b4a8fc8c.jpg?v=1679915528"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousell"
                    src="https://cdn.shopify.com/s/files/1/0516/0760/1336/files/store_c211e9c2-e46e-4173-a22b-f199ea1b8b21_1188x.jpg?v=1657163227"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousell"
                    src="https://cdn.shopify.com/s/files/1/0516/0760/1336/files/global-banner_c58ac685-3d4e-4c84-8aee-1ec63bf678d3.jpg?v=1678073142"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousell"
                    src="https://cdn.shopify.com/s/files/1/0516/0760/1336/articles/Walk-with-These-Latest-Dress-Recommendation-in-2023_592x.jpg?v=1679557822"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousell;