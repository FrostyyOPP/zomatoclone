import React from 'react';
import './accordion.css'

export const Accordion = () => {
    return (
        <div className='accordions'>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="heading">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse" aria-expanded="true" aria-controls="collapse">
                            Popular cuisine near me
                        </button>
                    </h2>
                    <div id="collapse" className="accordion-collapse collapse show" aria-labelledby="heading" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non praesentium voluptates aut delectus aliquid, corporis itaque mollitia corrupti harum eaque pariatur quo deserunt vel sit enim. Quibusdam magni sequi impedit?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
