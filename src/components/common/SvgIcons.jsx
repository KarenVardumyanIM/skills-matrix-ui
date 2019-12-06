// import React from 'react';

const SvgIcons = {
    user: `<svg width="45" height="40" viewBox="-5 -5 55 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.5 0.5C16.5386 0.5 19.8125 3.7739 19.8125 7.8125C19.8125 11.8511 16.5386 15.125 12.5 15.125C8.4614 15.125 5.1875 11.8511 5.1875 7.8125C5.1875 3.7739 8.4614 0.5 12.5 0.5ZM6.9328 15.9697C9.87775 17.9765 14.3302 18.5325 18.0676 15.9698L21.3281 16.7849C23.1922 17.251 24.5 18.9259 24.5 20.8474V22.6562C24.5 23.6745 23.6745 24.5 22.6562 24.5H2.34375C1.32546 24.5 0.5 23.6745 0.5 22.6562V20.8474C0.5 18.9259 1.80776 17.251 3.6719 16.7849L6.9328 15.9697Z" stroke="white"/> </svg>`,
    users: `<svg width="45" height="40" viewBox="-5 -5 55 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.4905 16.6499C7.30942 17.2962 7.21251 17.9867 7.21251 18.699V22.4167H1.93751C1.63261 22.4167 1.20001 22.056 1.20001 21.3542V18.716C1.20001 17.4317 1.89014 16.4247 2.7252 16.1611L2.72523 16.1611L3.83586 15.8105C4.83134 16.606 6.16313 16.998 7.4905 16.6499ZM27.1875 22.4167V18.699C27.1875 17.982 27.0893 17.2872 26.9059 16.6374C28.0754 16.9509 29.3932 16.76 30.5653 15.8108L31.6748 16.1611L31.8253 15.6842L31.6748 16.1611C32.5099 16.4247 33.2 17.4317 33.2 18.716V21.3542C33.2 22.056 32.7674 22.4167 32.4625 22.4167H27.1875ZM22.8999 14.6282L23.0504 14.1514L22.8999 14.6282C24.2859 15.0657 25.3625 16.6977 25.3625 18.699V22.6562C25.3625 23.7895 24.6529 24.5 24.0063 24.5H10.3938C9.74715 24.5 9.03751 23.7895 9.03751 22.6562V18.699C9.03751 16.6977 10.1141 15.0657 11.5001 14.6282L11.5001 14.6282L13.2947 14.0618C15.3707 15.7894 18.4858 16.2646 21.1062 14.062L22.8999 14.6282ZM17.2 0.5C19.8116 0.5 22.1141 3.2217 22.1141 6.83594C22.1141 10.4502 19.8116 13.1719 17.2 13.1719C14.5885 13.1719 12.2859 10.4502 12.2859 6.83594C12.2859 3.2217 14.5885 0.5 17.2 0.5ZM31.0344 10.8073C31.0344 13.1631 29.5399 14.8646 27.925 14.8646C26.3102 14.8646 24.8156 13.1631 24.8156 10.8073C24.8156 8.45152 26.3102 6.75 27.925 6.75C29.5399 6.75 31.0344 8.45152 31.0344 10.8073ZM9.58439 10.8073C9.58439 13.1631 8.08986 14.8646 6.47501 14.8646C4.86016 14.8646 3.36564 13.1631 3.36564 10.8073C3.36564 8.45152 4.86016 6.75 6.47501 6.75C8.08986 6.75 9.58439 8.45152 9.58439 10.8073Z" stroke="white"/> </svg>`,
    peopleFinder: `<svg width="45" height="40" viewBox="-5 -5 55 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6.94444 4.85714H6.44444V5.35714V5.80357C6.44444 6.39384 6.09423 6.64286 5.90278 6.64286H5.20833C5.01688 6.64286 4.66667 6.39384 4.66667 5.80357V5.35714V4.85714H4.16667H0.550621C0.549703 4.85604 0.548719 4.85481 0.547671 4.85347C0.526378 4.82609 0.5 4.76862 0.5 4.6875V2.45536C0.5 2.37423 0.526378 2.31677 0.547671 2.28939C0.548719 2.28804 0.549703 2.28682 0.550621 2.28571H4.16667H4.66667V1.78571V1.33929C4.66667 0.749019 5.01688 0.5 5.20833 0.5H5.90278C6.09423 0.5 6.44444 0.749019 6.44444 1.33929V1.78571V2.28571H6.94444H24.4494C24.4503 2.28682 24.4513 2.28804 24.4523 2.28939C24.4736 2.31677 24.5 2.37423 24.5 2.45536V4.6875C24.5 4.76862 24.4736 4.82609 24.4523 4.85346C24.4513 4.85481 24.4503 4.85604 24.4494 4.85714H6.94444ZM0.559796 4.86658C0.559792 4.8666 0.559461 4.86638 0.558817 4.86584L0.559796 4.86658ZM0.559796 2.27628C0.559801 2.27631 0.559478 2.27658 0.558815 2.27702L0.559796 2.27628ZM24.4402 2.27628C24.4402 2.27625 24.4406 2.27648 24.4412 2.27704L24.4402 2.27628ZM24.4402 4.86658C24.4402 4.86655 24.4405 4.86627 24.4412 4.86584L24.4402 4.86658ZM20.3333 10.7143V11.2143H20.8333H24.4494C24.4503 11.2154 24.4513 11.2166 24.4523 11.218C24.4736 11.2453 24.5 11.3028 24.5 11.3839V13.6161C24.5 13.6972 24.4736 13.7547 24.4523 13.782C24.4513 13.7834 24.4503 13.7846 24.4494 13.7857H20.8333H20.3333V14.2857V14.7321C20.3333 15.3224 19.9831 15.5714 19.7917 15.5714H19.0972C18.9058 15.5714 18.5556 15.3224 18.5556 14.7321V14.2857V13.7857H18.0556H0.550621C0.549703 13.7846 0.548719 13.7834 0.547671 13.782C0.526378 13.7547 0.5 13.6972 0.5 13.6161V11.3839C0.5 11.3028 0.526378 11.2453 0.547671 11.218C0.548719 11.2166 0.549703 11.2154 0.550621 11.2143H18.0556H18.5556V10.7143V10.2679C18.5556 9.67759 18.9058 9.42857 19.0972 9.42857H19.7917C19.9831 9.42857 20.3333 9.67759 20.3333 10.2679V10.7143ZM24.4402 11.2049C24.4402 11.2048 24.4406 11.2051 24.4412 11.2056L24.4402 11.2049ZM24.4402 13.7951C24.4402 13.7951 24.4405 13.7948 24.4412 13.7944L24.4402 13.7951ZM0.559796 13.7951C0.559792 13.7952 0.55945 13.795 0.558788 13.7944L0.559796 13.7951ZM0.559796 11.2049C0.559801 11.2049 0.559478 11.2052 0.558815 11.2056L0.559796 11.2049ZM12 19.6429V20.1429H12.5H24.4494C24.4503 20.144 24.4513 20.1452 24.4523 20.1465C24.4736 20.1739 24.5 20.2314 24.5 20.3125V22.5446C24.5 22.6258 24.4736 22.6832 24.4523 22.7106C24.4513 22.712 24.4503 22.7132 24.4494 22.7143H12.5H12V23.2143V23.6607C12 24.251 11.6498 24.5 11.4583 24.5H10.7639C10.5724 24.5 10.2222 24.251 10.2222 23.6607V23.2143V22.7143H9.72222H0.55062C0.549702 22.7132 0.548719 22.712 0.547671 22.7106C0.526378 22.6832 0.5 22.6258 0.5 22.5446V20.3125C0.5 20.2314 0.526378 20.1739 0.547671 20.1465C0.548719 20.1452 0.549703 20.144 0.550621 20.1429H9.72222H10.2222V19.6429V19.1964C10.2222 18.6062 10.5724 18.3571 10.7639 18.3571H11.4583C11.6498 18.3571 12 18.6062 12 19.1964V19.6429ZM24.4402 20.1334C24.4402 20.1334 24.4405 20.1336 24.4412 20.1341L24.4402 20.1334ZM24.4402 22.7237C24.4402 22.7237 24.4405 22.7234 24.4412 22.723L24.4402 22.7237ZM0.559795 22.7237C0.559791 22.7237 0.559448 22.7235 0.558785 22.723L0.559795 22.7237ZM0.559797 20.1334C0.559802 20.1334 0.559478 20.1337 0.558812 20.1342L0.559797 20.1334Z" stroke="white"/> </svg>`,
    branches: `<svg width="45" height="40" viewBox="-5 -5 55 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18.8264 12.9582L18.843 12.5562L18.454 12.4539C16.4745 11.9334 15.0833 10.3064 15.0833 8.4375C15.0833 6.17205 17.1393 4.25 19.7917 4.25C22.444 4.25 24.5 6.17205 24.5 8.4375C24.5 10.2443 23.1956 11.8273 21.3113 12.4069L20.9656 12.5132L20.9584 12.8749C20.9277 14.4279 20.4953 15.6171 19.6796 16.5298C18.8511 17.4551 17.718 17.9972 16.4205 18.3342C15.1182 18.6724 13.6969 18.7931 12.3153 18.908L12.3149 18.908L12.2622 18.9124C11.4478 18.9809 10.6373 19.049 9.89921 19.1593C9.14796 19.2716 8.43647 19.4323 7.8461 19.7012L7.84581 19.7014C7.30899 19.9463 6.92601 20.2735 6.66649 20.6653L6.30997 21.2035L6.92027 21.4141C8.70397 22.0294 9.91667 23.5658 9.91667 25.3125C9.91667 27.578 7.86065 29.5 5.20833 29.5C2.55602 29.5 0.5 27.578 0.5 25.3125C0.5 23.4746 1.84462 21.8696 3.78298 21.3168L4.14583 21.2133V20.8359V9.1582V8.77987L3.78175 8.67703C1.84464 8.12987 0.5 6.52549 0.5 4.6875C0.5 2.42205 2.55602 0.5 5.20833 0.5C7.86065 0.5 9.91667 2.42205 9.91667 4.6875C9.91667 6.52549 8.57203 8.12987 6.63492 8.67703L6.27083 8.77987V9.1582V17.5957V18.3571L6.96953 18.0545C8.43607 17.4194 10.2498 17.2577 12.1051 17.1038C13.2651 17.0078 14.4365 16.9105 15.4444 16.6904C16.4431 16.4723 17.3744 16.1157 17.9832 15.4331C18.5327 14.8216 18.7848 13.9638 18.8264 12.9582ZM6.75 4.6875C6.75 3.84748 6.00654 3.25 5.20833 3.25C4.41013 3.25 3.66667 3.84748 3.66667 4.6875C3.66667 5.52752 4.41013 6.125 5.20833 6.125C6.00654 6.125 6.75 5.52752 6.75 4.6875ZM3.66667 25.3125C3.66667 26.1525 4.41013 26.75 5.20833 26.75C6.00654 26.75 6.75 26.1525 6.75 25.3125C6.75 24.4725 6.00654 23.875 5.20833 23.875C4.41013 23.875 3.66667 24.4725 3.66667 25.3125ZM21.3333 8.4375C21.3333 7.59748 20.5899 7 19.7917 7C18.9935 7 18.25 7.59748 18.25 8.4375C18.25 9.27752 18.9935 9.875 19.7917 9.875C20.5899 9.875 21.3333 9.27752 21.3333 8.4375Z" stroke="white"/> </svg>`,
    skills: `<svg width="45" height="40" viewBox="-5 -5 55 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M29.0069 8.32724L29.0068 8.3272L29.0008 8.32981L16.076 13.8684C15.3712 14.155 14.6288 14.155 13.9241 13.8684L4.52813 9.84198L4.10798 9.66193L3.89107 10.0643C3.43583 10.9088 3.31626 11.7553 3.27298 12.7762L3.26253 13.0226L3.45179 13.1809C3.75093 13.431 4.00003 13.9403 4.00003 14.5833C4.00003 15.2444 3.73715 15.7616 3.4286 16.0041L3.21411 16.1727L3.23984 16.4444L3.99907 24.4584L3.99908 24.4584C4.00054 24.4739 4.00035 24.4878 3.99922 24.5H2.00085C1.99972 24.4878 1.99953 24.4738 2.001 24.4583L2.76023 16.4443L2.78596 16.1726L2.57144 16.004C2.26293 15.7615 2.00004 15.2444 2.00004 14.5833C2.00004 13.9173 2.26664 13.398 2.57763 13.1576L2.7626 13.0146L2.77147 12.781C2.81482 11.6396 2.95239 10.711 3.3041 9.85284L3.49074 9.39748L3.0384 9.20364L0.999244 8.32981L0.999261 8.32977L0.993131 8.32724C0.728237 8.21786 0.49945 7.83683 0.500001 7.29138C0.500552 6.7455 0.730475 6.36454 0.993148 6.25607L0.993165 6.25611L0.999244 6.25351L13.924 0.714915C14.6288 0.428359 15.3712 0.428362 16.076 0.714923L29.0007 6.25351L29.0007 6.25355L29.0068 6.25608C29.2718 6.36546 29.5005 6.74649 29.5 7.29194C29.4995 7.83782 29.2695 8.21877 29.0069 8.32724ZM16.8908 16.7874L16.8908 16.7874L16.8987 16.784L16.9081 16.78L16.9084 16.7799L23.3607 14.0145L23.8748 18.7748C23.8675 19.1799 23.6807 19.602 23.2761 20.0272C22.8608 20.4636 22.2362 20.8793 21.4261 21.2394C19.8072 21.9589 17.5357 22.4167 15 22.4167C12.4644 22.4167 10.1929 21.9589 8.57398 21.2394C7.7639 20.8793 7.13929 20.4636 6.72397 20.0272C6.31938 19.602 6.13259 19.1799 6.12527 18.7748L6.63942 14.0145L13.0917 16.7799L13.092 16.78L13.1014 16.784L13.1014 16.7841L13.1093 16.7874L13.119 16.7913L13.1195 16.7915C14.345 17.2917 15.6551 17.2917 16.8806 16.7915L16.8811 16.7913L16.8908 16.7874Z" stroke="white"/> </svg>`,
    categories: `<svg width="45" height="40" viewBox="-5 -5 55 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.2213 24.498L13.2183 24.497L10.3591 23.6327L10.3591 23.6327L10.355 23.6315C10.3457 23.6288 10.3323 23.6213 10.3209 23.5996C10.3092 23.5772 10.3042 23.547 10.3125 23.5152C10.3126 23.5148 10.3127 23.5144 10.3128 23.514L16.7097 0.557232L16.7097 0.557236L16.7107 0.553335C16.7176 0.52801 16.731 0.514397 16.7437 0.507202C16.7563 0.500013 16.7698 0.498025 16.7848 0.502126C16.7851 0.502223 16.7855 0.502323 16.7858 0.502427L19.6409 1.36553L19.6409 1.36555L19.645 1.36675C19.6543 1.3695 19.6677 1.37695 19.6791 1.39868C19.6908 1.42102 19.6958 1.45118 19.6875 1.48297C19.6874 1.48338 19.6873 1.48379 19.6872 1.4842L13.2911 24.4382C13.291 24.4385 13.2909 24.4388 13.2909 24.4391C13.2815 24.471 13.2643 24.4873 13.2521 24.4943C13.2411 24.5006 13.2324 24.5014 13.2213 24.498ZM7.35858 19.1623L7.35856 19.1623L7.35518 19.1661C7.34795 19.1743 7.34191 19.178 7.33789 19.1799C7.33355 19.1819 7.32896 19.183 7.32406 19.1831C7.31561 19.1834 7.30072 19.181 7.28305 19.1637L7.28281 19.1635L0.528655 12.5663L0.528668 12.5663L0.52557 12.5633C0.511488 12.5498 0.5 12.5272 0.5 12.4967C0.5 12.4662 0.511488 12.4436 0.52557 12.4301L0.525582 12.4301L0.528523 12.4272L7.28268 5.83493L7.28305 5.83458C7.2988 5.81917 7.31225 5.81658 7.32195 5.81691C7.33228 5.81726 7.34533 5.82126 7.35858 5.83599L9.39749 8.10178L9.39746 8.10181L9.40132 8.10599C9.41518 8.12105 9.42449 8.14332 9.42319 8.1716C9.42188 8.20012 9.41016 8.22355 9.3934 8.23902C9.39336 8.23906 9.39332 8.2391 9.39328 8.23913L5.14729 12.1305L4.74509 12.4991L5.14729 12.8677L9.39328 16.7591C9.39336 16.7592 9.39343 16.7593 9.39351 16.7593C9.40849 16.7732 9.4201 16.7952 9.42135 16.8247C9.42262 16.8549 9.41241 16.8799 9.39771 16.8962L9.39749 16.8965L7.35858 19.1623ZM29.4744 12.5682L29.4713 12.5712L22.7209 19.1647C22.7205 19.1651 22.7202 19.1654 22.7198 19.1657C22.7033 19.1811 22.6882 19.1841 22.6781 19.1838C22.6724 19.1836 22.6672 19.1823 22.6625 19.1801C22.6582 19.1781 22.652 19.1743 22.6448 19.1661L22.6448 19.1661L22.6414 19.1623L20.6025 16.8965L20.6025 16.8965L20.5987 16.8923C20.5848 16.8772 20.5755 16.8549 20.5768 16.8267C20.5781 16.7981 20.5898 16.7747 20.6066 16.7592C20.6066 16.7592 20.6067 16.7592 20.6067 16.7591L24.8527 12.8677L25.2547 12.4994L24.8529 12.1307L20.6067 8.23425C20.5916 8.22038 20.5799 8.19833 20.5786 8.16863C20.5774 8.13844 20.5876 8.11347 20.6023 8.09715L20.6025 8.0969L22.6388 5.83402C22.6535 5.81857 22.6679 5.81426 22.6795 5.81392C22.6913 5.81357 22.7042 5.81721 22.7172 5.82993L29.4712 12.4318L29.4712 12.4319L29.4744 12.435C29.4885 12.4485 29.5 12.4711 29.5 12.5016C29.5 12.5321 29.4885 12.5547 29.4744 12.5682L29.4744 12.5682Z" stroke="white"/> </svg>`,
    settings: `<svg width="45" height="40" viewBox="-5 -5 55 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M21.8804 14.5311L21.9491 14.1745C22.1624 13.0674 22.1624 11.9325 21.9491 10.8255L21.8804 10.4689L22.1982 10.2932L24.4421 9.05339C24.4969 9.0231 24.5068 8.9743 24.4958 8.94045L24.4958 8.94042C23.9372 7.21901 22.9829 5.66139 21.7322 4.36595L21.7321 4.36588C21.7134 4.34657 21.6851 4.33073 21.6502 4.32565C21.6152 4.32055 21.5805 4.32738 21.5527 4.34271L19.3107 5.58231L19.0139 5.74642L18.7517 5.53132C17.8556 4.79625 16.8243 4.22517 15.7094 3.84765L15.3697 3.73264V3.37406V0.895037C15.3697 0.862621 15.3438 0.808956 15.2695 0.792993L15.2695 0.792988C13.4072 0.392505 11.5022 0.412183 9.7292 0.793332L21.8804 14.5311ZM21.8804 14.5311L22.1982 14.7068M21.8804 14.5311L22.1982 14.7068M22.1982 14.7068L24.442 15.9467L24.4421 15.9467M22.1982 14.7068L24.4421 15.9467M24.4421 15.9467C24.4968 15.9769 24.5067 16.0256 24.4957 16.0596C23.9372 17.781 22.9829 19.3386 21.7321 20.634L21.7321 20.6341M24.4421 15.9467L21.7321 20.6341M21.7321 20.6341C21.7134 20.6534 21.6851 20.6692 21.6503 20.6743M21.7321 20.6341L21.6503 20.6743M15.731 24.4831C15.8208 24.3757 15.8697 24.2423 15.8697 24.1049V21.6259L15.731 24.4831ZM15.731 24.4831C15.6413 24.5904 15.5161 24.6653 15.3759 24.6955L15.731 24.4831ZM19.0139 19.2536L19.3107 19.4177L21.5526 20.6572L19.0139 19.2536ZM19.0139 19.2536L18.7517 19.4687M19.0139 19.2536L18.7517 19.4687M18.7517 19.4687C17.8555 20.2037 16.8242 20.7748 15.7093 21.1524L15.3697 21.2674M18.7517 19.4687L15.3697 21.2674M15.3697 21.2674V21.6259M15.3697 21.2674V21.6259M15.3697 21.6259V24.1049C15.3697 24.1229 15.3634 24.1433 15.3475 24.1623L15.3474 24.1624M15.3697 21.6259L15.3474 24.1624M15.3474 24.1624C15.331 24.182 15.3048 24.1994 15.2708 24.2067C13.4978 24.5878 11.5928 24.6075 9.73048 24.207L9.73045 24.207M15.3474 24.1624L9.73045 24.207M9.73045 24.207C9.65621 24.191 9.63027 24.1374 9.63027 24.105V21.6259V21.2674M9.73045 24.207L9.63027 21.2674M9.63027 21.2674L9.29065 21.1524M9.63027 21.2674L9.29065 21.1524M9.29065 21.1524C8.17577 20.7748 7.14443 20.2037 6.24829 19.4687L5.98606 19.2536M9.29065 21.1524L5.98606 19.2536M5.98606 19.2536L5.68926 19.4177M5.98606 19.2536L5.68926 19.4177M5.68926 19.4177L3.44739 20.6572C3.41961 20.6726 3.3849 20.6794 3.34986 20.6744C3.31489 20.6693 3.28653 20.6534 3.26788 20.6341L3.26784 20.634M5.68926 19.4177L3.26784 20.634M3.26784 20.634C2.01714 19.3386 1.06275 17.781 0.504248 16.0596L0.504237 16.0596M3.26784 20.634L0.504237 16.0596M0.504237 16.0596C0.493251 16.0257 0.503135 15.9769 0.557946 15.9466L2.80177 14.7068L3.11963 14.5312M0.504237 16.0596L3.11963 14.5312M3.11963 14.5312L3.05092 14.1745M3.11963 14.5312L3.05092 14.1745M3.05092 14.1745C2.83758 13.0675 2.83758 11.9326 3.05092 10.8255L3.11963 10.4689M3.05092 14.1745L3.11963 10.4689M3.11963 10.4689L2.80177 10.2933M3.11963 10.4689L2.80177 10.2933M2.80177 10.2933L0.557955 9.05342L0.557932 9.0534M2.80177 10.2933L0.557932 9.0534M0.557932 9.0534C0.503234 9.02318 0.493277 8.97444 0.504298 8.94047L0.0287453 8.78617M0.557932 9.0534L0.0287453 8.78617M0.0287453 8.78617L0.5043 8.94046C1.06281 7.21905 2.01714 5.66144 3.26789 4.36601L3.26798 4.36592M0.0287453 8.78617L3.26798 4.36592M3.26798 4.36592C3.28661 4.34662 3.31492 4.33078 3.34984 4.3257C3.38487 4.32061 3.41957 4.32742 3.44735 4.34277L5.68931 5.58236L5.98611 5.74647M3.26798 4.36592L5.98611 5.74647M5.98611 5.74647L6.24834 5.53138M5.98611 5.74647L6.24834 5.53138M6.24834 5.53138C7.14449 4.79632 8.17583 4.22524 9.2907 3.84769L9.63032 3.73268M6.24834 5.53138L9.63032 3.73268M9.63032 3.73268V3.37411M9.63032 3.73268V3.37411M9.63032 3.37411V0.895138M9.63032 3.37411V0.895138M21.6503 20.6743C21.6153 20.6794 21.5806 20.6726 21.5528 20.6574L21.6503 20.6743ZM9.63032 0.895138C9.63032 0.877183 9.63656 0.856758 9.65261 0.837558M9.63032 0.895138L9.65261 0.837558M9.65261 0.837558C9.66893 0.818028 9.69511 0.800683 9.72913 0.793348L9.65261 0.837558ZM17.2122 12.5C17.2122 9.98014 15.0779 7.96776 12.5 7.96776C9.92206 7.96776 7.78784 9.98014 7.78784 12.5C7.78784 15.0199 9.92206 17.0323 12.5 17.0323C15.0779 17.0323 17.2122 15.0199 17.2122 12.5Z" stroke="white"/> </svg>`,
    signOut: `<svg width="45" height="40" viewBox="-5 -5 55 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18.2325 0.577574C18.5457 0.436285 18.9211 0.475485 19.2157 0.794915C19.216 0.79517 19.2162 0.795425 19.2164 0.795681L29.214 11.7282C29.2143 11.7285 29.2146 11.7288 29.2149 11.7292C29.595 12.1504 29.595 12.8482 29.2149 13.2694C29.2146 13.2698 29.2143 13.2701 29.214 13.2704L19.2153 24.2042C18.9235 24.5232 18.5482 24.5641 18.2339 24.4231C17.9149 24.2799 17.6437 23.9377 17.6437 23.435V17.186V16.686H17.1437H9.04803C8.57361 16.686 8.1194 16.2564 8.1194 15.6238V9.37482C8.1194 8.7422 8.57361 8.31257 9.04803 8.31257H17.1437H17.6437V7.81257V1.56362C17.6437 1.064 17.9137 0.721423 18.2325 0.577574ZM10.9292 21.6124V24.2161C10.9292 24.4126 10.7904 24.4972 10.7148 24.4972H5.71456C2.87692 24.4972 0.5 21.9651 0.5 18.7483V6.25035C0.5 3.03353 2.87692 0.501384 5.71456 0.501384H10.7148C10.7904 0.501384 10.9292 0.586016 10.9292 0.782507V3.38624C10.9292 3.58272 10.7904 3.66736 10.7148 3.66736H5.71456C4.34366 3.66736 3.30971 4.86506 3.30971 6.25035V18.7483C3.30971 20.1335 4.34366 21.3313 5.71456 21.3313H10.7148C10.7904 21.3313 10.9292 21.4159 10.9292 21.6124Z" stroke="white"/> </svg>`,
    hideSider: `<svg width="13" height="13" viewBox="0 0 448 456" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0 56V16C0 7.163 7.163 0 16 0H432C440.837 0 448 7.163 448 16V56C448 64.837 440.837 72 432 72H16C7.163 72 0 64.837 0 56ZM16 200H432C440.837 200 448 192.837 448 184V144C448 135.163 440.837 128 432 128H16C7.163 128 0 135.163 0 144V184C0 192.837 7.163 200 16 200ZM16 456H432C440.837 456 448 448.837 448 440V400C448 391.163 440.837 384 432 384H16C7.163 384 0 391.163 0 400V440C0 448.837 7.163 456 16 456ZM16 328H432C440.837 328 448 320.837 448 312V272C448 263.163 440.837 256 432 256H16C7.163 256 0 263.163 0 272V312C0 320.837 7.163 328 16 328Z" fill="white"/> </svg>`,
    openSider: `<svg width="22" height="13" viewBox="0 0 448 496" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M72 176C111.8 176 144 208.2 144 248C144 287.8 111.8 320 72 320C32.2 320 0 287.8 0 248C0 208.2 32.2 176 72 176ZM0 72C0 111.8 32.2 144 72 144C111.8 144 144 111.8 144 72C144 32.2 111.8 0 72 0C32.2 0 0 32.2 0 72ZM0 424C0 463.8 32.2 496 72 496C111.8 496 144 463.8 144 424C144 384.2 111.8 352 72 352C32.2 352 0 384.2 0 424Z" fill="white"/> </svg>`,
    arrowDownIcon: `<svg width="30" height="40" viewBox="-150 0 550 250" fill="white" xmlns="http://www.w3.org/2000/svg"> <path d="M24.0657 0H262.066C283.466 0 294.166 25.9 279.066 41L160.066 160C150.666 169.4 135.466 169.4 126.166 160L7.06568 41C-8.03432 25.9 2.66568 0 24.0657 0Z" fill="grey"/> </svg>`
}

export { SvgIcons };