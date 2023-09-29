// import "./style.scss";

function Logo(props) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="71"
        viewBox="0 0 223 40"
      >
        <text
          id="GoldenScope"
          className="cls-1"
          transform="translate(50.922 30.025) scale(1.114)"
        >
          HOMEDECOR
        </text>
        {props.theme === "logo-light" && (
          <text
            id="GoldenScope"
            className="cls-5"
            transform="translate(50.922 30.025) scale(1.114)"
          >
            HOMEDECOR
          </text>
        )}
        <svg
          width="55"
          height="55"
          viewBox="0 0 348 373"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M65.0667 42.4L0.133333 84L0 101.6C0 111.333 0.266667 119.333 0.533333 119.333C0.933333 119.333 30.4 100.133 66 76.6667C101.6 53.2 131.067 34 131.467 34C131.733 34 160.267 52.6667 194.8 75.3333C229.333 98.1333 258.8 117.333 260.133 118.133C262.533 119.333 262.667 118.667 262.667 101.733V84L240.667 70L218.667 56.1333V31.0667V5.99999H200.667H182.8L182.4 19.3333L182 32.5333L156.933 16.6667C143.2 7.86666 131.467 0.666655 130.933 0.799989C130.4 0.799989 100.8 19.6 65.0667 42.4Z"
            fill="#28B3EF"
          />
          <path
            d="M74.4 89.2L17.3333 126.667V158.8V190.933L70.8 220.533C100.133 236.8 124.4 250 124.667 249.733C124.933 249.467 130.267 242.133 136.667 233.333C158.133 204 185.733 171.467 216.267 140L235.733 120L195.067 93.3333C172.667 78.6667 149.2 63.3333 142.8 59.2L131.333 51.7333L74.4 89.2ZM106.667 135.333V152.667H89.3333H72V135.333V118H89.3333H106.667V135.333ZM145.333 135.333V152.667H127.333H109.333V135.333V118H127.333H145.333V135.333ZM106.667 172.667V190H89.3333H72V172.667V155.333H89.3333H106.667V172.667ZM145.067 172.267L144.667 189.333H127.333H110L109.6 172.267L109.2 155.333H127.333H145.467L145.067 172.267Z"
            fill="#28B3EF"
          />
          <path
            d="M312.667 76.4C240.133 140.133 176.933 208.667 140 264.133C136.133 269.867 132.533 275.2 132 275.733C131.2 276.667 61.0667 238.8 25.3333 218.133L19.3333 214.667L22.6667 218.8C24.5333 221.067 30.8 228.267 36.6667 234.8C72 273.867 112 326.533 132.8 361.467C134.133 363.733 135.067 362.4 140.667 351.333C162 308.8 203.6 238.667 239.333 184.667C272.267 134.933 295.867 103.467 325.067 69.6C331.867 61.7333 337.333 55.3333 337.067 55.3333C336.8 55.3333 325.867 64.9333 312.667 76.4Z"
            fill="#28B3EF"
          />
        </svg>

        {/* <g id="icon">
          <path
            id="Shape_3_copy"
            data-name="Shape 3 copy"
            className="cls-2"
            d="M20.609,0A20.5,20.5,0,1,1,.219,20.5,20.446,20.446,0,0,1,20.609,0ZM5.553,26.2L13.6,34.585a0.826,0.826,0,0,1-.472,1.326c-0.536.166-11.278,3.445-12.2,3.724a0.683,0.683,0,0,1-.871-0.909c0.221-.659,3.9-11.356,4.179-12.12A0.818,0.818,0,0,1,5.553,26.2Z"
          />
        </g>
        <path
          className="cls-3"
          d="M20.609,0A20.5,20.5,0,1,1,.219,20.5,20.446,20.446,0,0,1,20.609,0ZM5.553,26.2L13.6,34.585a0.826,0.826,0,0,1-.472,1.326c-0.536.166-11.278,3.445-12.2,3.724a0.683,0.683,0,0,1-.871-0.909c0.221-.659,3.9-11.356,4.179-12.12A0.818,0.818,0,0,1,5.553,26.2Z"
        />
        <path
          id="n_copy"
          data-name="n copy"
          className="cls-4"
          d="M22.988,18.587H18.7v-4.9q-0.4-.059-0.922-0.1T16.8,13.538a2.22,2.22,0,0,0-2.045.876,5.938,5.938,0,0,0-.547,2.978v8.145H9.912V16.867a11.97,11.97,0,0,1,.317-2.861,5.672,5.672,0,0,1,1.066-2.219,4.836,4.836,0,0,1,2.031-1.445,8.744,8.744,0,0,1,3.211-.511,22.861,22.861,0,0,1,3.629.278,23.7,23.7,0,0,1,2.823.6v7.881Zm-4.154,4.3h4.278v4.99c0.268,0.04.574,0.075,0.919,0.1s0.67,0.045.976,0.045a2.2,2.2,0,0,0,2.038-.892A6.153,6.153,0,0,0,27.59,24.1V15.806h4.278v8.827a12.443,12.443,0,0,1-.316,2.913A5.824,5.824,0,0,1,30.49,29.8a4.815,4.815,0,0,1-2.024,1.471,8.535,8.535,0,0,1-3.2.52,22.407,22.407,0,0,1-3.617-.282,23.365,23.365,0,0,1-2.814-.61V22.883Z"
        /> */}
      </svg>
    </>
  );
}

export default Logo;
