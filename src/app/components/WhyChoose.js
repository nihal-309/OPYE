import React from 'react'
import Carousel from './Carousel'
import IMG2 from '../images/award.png'

function WhyChoose(){
    return(
        <div className="WhyChoose">
            <Carousel />
            <div className="content">
                <h1 className="head">Why Choose Us?</h1> {/*FONT FAMILY HAS TO BE STORYBOOK*/}
                <div className="desc">
                        <svg className='svg1' width="84" height="81" viewBox="0 0 84 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M81.7903 13.12L43.0214 0.16621C42.3582 -0.0554033 41.6411 -0.0554033 40.9779 0.16621L2.20902 13.12C1.56572 13.3349 1.0062 13.7473 0.609736 14.2988C0.213268 14.8502 -5.02472e-05 15.5127 8.87791e-09 16.1924V48.5768C8.87791e-09 49.4357 0.340381 50.2594 0.946262 50.8667C1.55214 51.4741 2.3739 51.8152 3.23074 51.8152C4.08759 51.8152 4.90934 51.4741 5.51522 50.8667C6.1211 50.2594 6.46148 49.4357 6.46148 48.5768V20.6858L20.0266 25.2155C16.4225 31.052 15.2764 38.0836 16.84 44.7664C18.4035 51.4492 22.5489 57.2368 28.3659 60.8586C21.0967 63.7165 14.8129 68.8859 10.2172 75.9538C9.97821 76.3098 9.81219 76.71 9.72882 77.131C9.64544 77.5519 9.64638 77.9853 9.73156 78.4059C9.81675 78.8265 9.98449 79.2259 10.225 79.5809C10.4656 79.936 10.7741 80.2396 11.1327 80.474C11.4914 80.7085 11.8929 80.8692 12.314 80.9467C12.7351 81.0242 13.1674 81.0171 13.5857 80.9257C14.0041 80.8343 14.4001 80.6605 14.7508 80.4143C15.1016 80.1681 15.4 79.8545 15.6287 79.4917C21.7146 70.1327 31.3261 64.769 41.9996 64.769C52.6732 64.769 62.2847 70.1327 68.3706 79.4917C68.8444 80.1977 69.5764 80.6884 70.4083 80.8576C71.2401 81.0269 72.1051 80.8612 72.816 80.3964C73.527 79.9316 74.0269 79.2049 74.2077 78.3736C74.3885 77.5423 74.2356 76.673 73.7821 75.9538C69.1863 68.8859 62.8783 63.7165 55.6334 60.8586C61.4448 57.237 65.5862 51.4531 67.1495 44.7752C68.7128 38.0973 67.5704 31.0705 63.9727 25.2358L81.7903 19.2851C82.4337 19.0703 82.9934 18.6579 83.39 18.1065C83.7866 17.555 84 16.8925 84 16.2127C84 15.5329 83.7866 14.8703 83.39 14.3188C82.9934 13.7674 82.4337 13.355 81.7903 13.1402V13.12ZM61.3841 38.8615C61.385 41.9334 60.6592 44.9617 59.2664 47.698C57.8736 50.4343 55.8534 52.8006 53.3716 54.6027C50.8897 56.4048 48.017 57.5914 44.9891 58.0652C41.9612 58.5389 38.8644 58.2863 35.9527 57.328C33.041 56.3698 30.3975 54.7332 28.2391 52.5525C26.0806 50.3718 24.4687 47.7093 23.5356 44.7832C22.6025 41.8572 22.3748 38.7511 22.8712 35.7198C23.3675 32.6885 24.5738 29.8183 26.3911 27.3448L40.9779 32.2025C41.6411 32.4241 42.3582 32.4241 43.0214 32.2025L57.6082 27.3448C60.0627 30.6804 61.386 34.7167 61.3841 38.8615Z" fill="#163247"/>
                        </svg>
                    <div className="text">
                        <h2>By Students, For Students</h2> {/*FONT FAMILY HAS TO BE GILROY*/}
                        <p> {/*FONT FAMILY HAS TO BE GILROY*/}
                            We get it, because we are it! <br />
                            Our team is composed of fellow college students who understand your unique
                            travel needs, budget constraints, and desire for thrilling experiences.
                        </p>
                    </div>
                </div>
                <div className="desc">
                    <div className="svg5">
                        <svg className='svg2' width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M87.3565 71.4205L71.3496 41.9695C72.9826 38.282 73.8962 34.2067 73.8962 29.9191C73.8962 13.3948 60.4316 0 43.8242 0C27.2126 0 13.7494 13.3961 13.7494 29.9191C13.7494 34.3101 14.7082 38.4766 16.415 42.2321L0.336834 71.4069C-0.181593 72.3445 -0.0954305 73.501 0.552838 74.3569C1.20247 75.2102 2.29933 75.6115 3.34687 75.3667L17.0768 72.233L21.776 85.2549C22.1426 86.2672 23.0712 86.9694 24.1476 87.0483C24.2174 87.0537 24.2843 87.0564 24.35 87.0564C24.8446 87.0563 25.3298 86.9227 25.7542 86.6699C26.1785 86.4171 26.5261 86.0546 26.7598 85.6209L40.7523 59.6847C41.7724 59.7875 42.7972 59.8388 43.8226 59.8384C44.7732 59.8384 45.7113 59.7894 46.6386 59.7023L60.9347 85.6414C61.1877 86.1012 61.5688 86.4785 62.0322 86.7278C62.4957 86.9772 63.0216 87.088 63.5469 87.0469C64.6205 86.9612 65.545 86.2604 65.9087 85.2535L70.608 72.2316L84.3379 75.3653C85.391 75.6183 86.4769 75.2115 87.1265 74.361C87.7789 73.5119 87.8665 72.3608 87.3563 71.4205H87.3565ZM24.8476 77.6607L21.4064 68.1221C20.936 66.8254 19.5711 66.0702 18.2198 66.3899L8.06494 68.7072L19.6396 47.7034C23.4512 52.8265 28.8672 56.6909 35.1488 58.5714L24.8476 77.6607ZM19.2442 29.919C19.2442 16.4358 30.2717 5.46586 43.8251 5.46586C57.3772 5.46586 68.4033 16.4358 68.4033 29.919C68.4033 43.4022 57.3772 54.3749 43.8251 54.3749C30.2703 54.3749 19.2442 43.4022 19.2442 29.919ZM69.4646 66.3899C68.1078 66.0714 66.7484 66.8253 66.2779 68.1219L62.8136 77.7299L52.2867 58.6324C58.7352 56.7533 64.2825 52.7869 68.1434 47.5142L79.67 68.718L69.4646 66.3899Z" fill="#163247"/>
                        </svg>
                        <svg className='svg4' width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="12.6774" cy="12.2903" rx="12.6774" ry="12.2903" fill="#163247"/>
                        </svg>
                    </div>
                    <div className="text">
                        <h2>Award- Winning Services</h2> {/*FONT FAMILY HAS TO BE GILROY*/}
                        <p> {/*FONT FAMILY HAS TO BE GILROY*/}
                        Travel worry-free knowing that we’re here for you 24 hours a day if you need us
                        </p>
                    </div>
                </div>
                <div className="desc">
                    <svg className='svg3' width="107" height="76" viewBox="0 0 107 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M71.3333 38C71.3333 35.0358 72.5076 32.193 74.5979 30.097C76.6881 28.001 79.5231 26.8235 82.4792 26.8235C85.4352 26.8235 88.2702 28.001 90.3605 30.097C92.4507 32.193 93.625 35.0358 93.625 38C93.625 40.9642 92.4507 43.807 90.3605 45.903C88.2702 47.999 85.4352 49.1765 82.4792 49.1765C79.5231 49.1765 76.6881 47.999 74.5979 45.903C72.5076 43.807 71.3333 40.9642 71.3333 38ZM57.9583 0V76H107V0H57.9583ZM98.0833 58.1176C93.1792 58.1176 89.1667 62.1412 89.1667 67.0588H75.7917C75.7917 64.6875 74.8522 62.4133 73.18 60.7365C71.5078 59.0597 69.2399 58.1176 66.875 58.1176V17.8824C71.8238 17.8824 75.7917 13.9035 75.7917 8.94118H89.1667C89.1667 11.3125 90.1061 13.5867 91.7783 15.2635C93.4505 16.9403 95.7185 17.8824 98.0833 17.8824V58.1176ZM31.2083 13.4118C36.1125 13.4118 40.125 17.4353 40.125 22.3529C40.125 27.2706 36.1125 31.2941 31.2083 31.2941C26.3042 31.2941 22.2917 27.2706 22.2917 22.3529C22.2917 17.4353 26.3042 13.4118 31.2083 13.4118ZM31.2083 4.47059C21.3554 4.47059 13.375 12.4729 13.375 22.3529C13.375 32.2329 21.3554 40.2353 31.2083 40.2353C41.0613 40.2353 49.0417 32.2329 49.0417 22.3529C49.0417 12.4729 41.0613 4.47059 31.2083 4.47059ZM31.2083 49.1765C13.9546 49.1765 0 57.1788 0 67.0588V76H49.0417V67.0588H8.91667C8.91667 64.4659 16.7188 58.1176 31.2083 58.1176C39.3671 58.1176 45.3413 60.1294 49.0417 62.3647V52.3953C44.0037 50.3835 37.8958 49.1765 31.2083 49.1765Z" fill="#163247"/>
                    </svg>
                    <div className="text">
                        <h2>Budget-Friendly Options</h2> {/*FONT FAMILY HAS TO BE GILROY*/}
                        <p> {/*FONT FAMILY HAS TO BE GILROY*/}
                        College life can be expensive, but that doesn't mean you have to miss
                        out on exciting adventures. We offer a range of budget-friendly packages
                        and special deals to ensure you get the most out of your travels without
                        breaking the bank.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChoose;
