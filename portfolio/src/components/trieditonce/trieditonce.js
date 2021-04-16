import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import './trieditonce.css'

export function TriedItOnce() {
    return (
        <div className="TriedItOnce">
            <h1 style={{ fontFamily: 'Quicksand', marginBottom: '2rem' }}>Tried It Once !!!</h1>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={true}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                <div>
                    <img
                        src="./assets/terraform.png"
                        alt="Terraform"
                        height="60rem"
                    />
                </div>
                <div>
                    <img
                        src="./assets/figma.png"
                        alt="figma"
                        height="60rem" />
                </div>
                <div>
                    <img
                        src="./assets/application-insights.png"
                        alt="Azure Application Insights"
                        height="60rem"
                    />
                </div>
                <div>
                    <img
                        src="./assets/elastic-bean-stalk.png"
                        alt="AWS Elastic Beanstalk"
                        height="60rem"
                    />
                </div>
                <div>
                    <img
                        src="./assets/php.svg"
                        alt="PHP"
                        height="60rem"
                    />
                </div>
                <div>
                    <img
                        src="./assets/spark.png"
                        alt="Apache Spark"
                        height="60rem"
                    />
                </div>
                <div>
                    <img
                        src="./assets/superset.png"
                        alt="Apache Superset"
                        height="60rem"
                    />
                </div>
                <div>
                    <img
                        src="./assets/fhir.png"
                        alt="FHIR"
                        height="60rem"
                    />
                </div>
            </Carousel>
        </div>
    )
}