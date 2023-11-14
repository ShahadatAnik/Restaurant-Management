const Copy = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.9}
			stroke="currentColor"
			{...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
			/>
		</svg>
	);
};

const Send = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="52"
			height="52"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="#fd0061"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M10 14l11 -11" />
			<path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
		</svg>
	);
};

const Receive = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="52"
			height="52"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="#fd0061"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M10 14l11 -11" />
			<path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
		</svg>
	);
};

const Edit = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth={1.25}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
			<path d="M13.5 6.5l4 4" />
		</svg>
	);
};

const Trash = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth={1.25}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M4 7l16 0" />
			<path d="M10 11l0 6" />
			<path d="M14 11l0 6" />
			<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
			<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
		</svg>
	);
};

const Add = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth={1.25}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M12 5l0 14" />
			<path d="M5 12l14 0" />
		</svg>
	);
};
const Close = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			{...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M6 18L18 6M6 6l12 12"
			/>
		</svg>
	);
};

const DropDown = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth={1.25}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M7 7l5 5l5 -5" />
			<path d="M7 13l5 5l5 -5" />
		</svg>
	);
};

const Menu = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-5 w-5"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			{...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M4 6h16M4 12h8m-8 6h16"
			/>
		</svg>
	);
};

const Bell = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-5 w-5"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			{...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
			/>
		</svg>
	);
};

const Search = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="absolute bottom-0 left-3 top-0 my-auto h-6 w-6 text-gray-400"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			{...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
			/>
		</svg>
	);
};

const Up = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth={1.9}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M12 5l0 14" />
			<path d="M16 9l-4 -4" />
			<path d="M8 9l4 -4" />
		</svg>
	);
};

const Down = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth={1.9}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M12 5l0 14" />
			<path d="M16 15l-4 4" />
			<path d="M8 15l4 4" />
		</svg>
	);
};

const Check = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth={1.25}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M5 12l5 5l10 -10" />
		</svg>
	);
};

const ArrowBack = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth={1.25}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M9 14l-4 -4l4 -4" />
			<path d="M5 10h11a4 4 0 1 1 0 8h-1" />
		</svg>
	);
};

const Kitchen = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height={24}
			viewBox="0 0 24 24"
			strokeWidth={1.25}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M4 3h8l-1 9h-6z" />
			<path d="M7 18h2v3h-2z" />
			<path d="M20 3v12h-5c-.023 -3.681 .184 -7.406 5 -12z" />
			<path d="M20 15v6h-1v-3" />
			<path d="M8 12l0 6" />
		</svg>
	);
};

const Background = ({ ...props }) => {
	return (
		<svg
			width="53"
			height="47"
			viewBox="0 0 53 47"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="53" height="47" fill="none" />
			<path
				d="M10.0064 29.3777L18.3714 20.9999"
				stroke="black"
				strokeWidth={0.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3.59081 14.6364C4.94704 13.2801 7.03442 13.1019 8.58369 14.0997C9.11189 13.1795 9.98398 12.5069 11.0081 12.2297C12.0322 11.9526 13.1245 12.0936 14.0447 12.6218C14.9648 13.15 15.6375 14.0221 15.9146 15.0462C16.1918 16.0704 16.0507 17.1627 15.5225 18.0828L20.5614 23.1216L12.0761 31.6069L7.03725 26.5681C6.58155 26.8295 6.07881 26.9986 5.55775 27.0658C5.03668 27.133 4.50749 27.0968 4.00039 26.9595C3.49329 26.8221 3.01822 26.5862 2.60228 26.2652C2.18635 25.9443 1.83771 25.5445 1.57627 25.0888C1.31482 24.6331 1.1457 24.1304 1.07855 23.6093C1.01139 23.0882 1.04753 22.5591 1.18489 22.052C1.32226 21.5449 1.55815 21.0698 1.87912 20.6538C2.20008 20.2379 2.59983 19.8893 3.05553 19.6278C2.56155 18.8597 2.34528 17.9457 2.44265 17.0377C2.54003 16.1296 2.94519 15.2823 3.59081 14.6364Z"
				stroke="black"
				strokeWidth={0.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M17.7071 12.0209L29.0208 0.707212C29.2084 0.519676 29.4627 0.414319 29.7279 0.414319C29.9931 0.414319 30.2475 0.519676 30.435 0.707212L30.7886 1.06077C31.8492 2.12143 32.9495 6.78126 32.5563 8.48539L33.2635 9.19249C33.451 9.38003 33.5563 9.63438 33.5563 9.8996C33.5563 10.1648 33.451 10.4192 33.2635 10.6067L27.6066 16.2636C27.4191 16.4511 27.1647 16.5565 26.8995 16.5565C26.6343 16.5565 26.3799 16.4511 26.1924 16.2636L25.4853 15.5565C23.5471 16.0041 19.1213 14.8493 18.0607 13.7887L17.7071 13.4351C17.5196 13.2476 17.4142 12.9932 17.4142 12.728C17.4142 12.4628 17.5196 12.2085 17.7071 12.0209Z"
				stroke="black"
				strokeWidth={0.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M48.3848 20.4852L39.8995 11.9999C39.7425 18.6538 42.2301 21.4341 44.8492 24.0207L48.3848 20.4852ZM48.3848 20.4852L52.6274 24.7278L51.9203 25.4349L49.799 23.3136M32.8284 20.4852L44.8492 32.506M30.7071 22.6065L32.8284 24.7278C33.391 25.2905 34.1541 25.6065 34.9497 25.6065C35.7454 25.6065 36.5085 25.2905 37.0711 24.7278C37.6337 24.1652 37.9497 23.4022 37.9497 22.6065C37.9497 21.8109 37.6337 21.0478 37.0711 20.4852L34.9497 18.3639"
				stroke="black"
				strokeWidth={0.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M25.1213 39.364C25.6839 39.9266 26.447 40.2427 27.2426 40.2427C28.0383 40.2427 28.8014 39.9266 29.364 39.364C29.9266 38.8014 30.2426 38.0383 30.2426 37.2427C30.2426 36.447 29.9266 35.684 29.364 35.1214C28.8014 34.5587 28.0383 34.2427 27.2426 34.2427C26.447 34.2427 25.6839 34.5587 25.1213 35.1214C24.5587 35.684 24.2426 36.447 24.2426 37.2427C24.2426 38.0383 24.5587 38.8014 25.1213 39.364Z"
				stroke="black"
				strokeWidth={0.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M22.7624 28.9528C23.2945 28.4203 23.94 28.0149 24.6507 27.7668C25.3614 27.5187 26.119 27.4342 26.8669 27.5197C27.6148 27.6052 28.3337 27.8585 28.9701 28.2607C29.6064 28.6628 30.1437 29.2035 30.5419 29.8423C31.0954 29.5467 31.7275 29.432 32.3495 29.5144C32.9715 29.5968 33.552 29.8722 34.0093 30.3017C34.4666 30.7313 34.7778 31.2934 34.899 31.909C35.0202 32.5246 34.9453 33.1627 34.6849 33.7335C35.119 33.7191 35.5511 33.7991 35.9513 33.968C36.3514 34.1369 36.7101 34.3908 37.0026 34.7119C37.2951 35.033 37.5143 35.4139 37.6452 35.828C37.776 36.2422 37.8154 36.6799 37.7605 37.1108C37.7057 37.5416 37.5579 37.9555 37.3274 38.3237C37.097 38.6918 36.7893 39.0056 36.4257 39.2432C36.0621 39.4808 35.6512 39.6366 35.2215 39.6999C34.7918 39.7631 34.3534 39.7323 33.9368 39.6096C34.1068 40.2439 34.1502 40.9055 34.0646 41.5566C33.9789 42.2077 33.7658 42.8355 33.4375 43.4043C33.1092 43.9731 32.6721 44.4716 32.1511 44.8714C31.6302 45.2712 31.0355 45.5645 30.4012 45.7345C29.7669 45.9046 29.1053 45.948 28.4542 45.8623C27.8031 45.7767 27.1753 45.5636 26.6065 45.2353C26.0378 44.907 25.5392 44.4699 25.1394 43.9489C24.7396 43.4279 24.4463 42.8333 24.2763 42.199C23.0103 42.5939 21.6393 42.4697 20.465 41.8537C19.2906 41.2377 18.409 40.1805 18.0141 38.9145C17.6193 37.6485 17.7435 36.2776 18.3595 35.1032C18.9754 33.9288 20.0327 33.0472 21.2986 32.6524C21.2746 31.968 21.3919 31.286 21.6433 30.6489C21.8946 30.0119 22.2746 29.4335 22.7595 28.95L22.7624 28.9528Z"
				stroke="black"
				strokeWidth={0.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const Update = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth={1.25}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5" />
			<path d="M5.63 7.16l0 .01" />
			<path d="M4.06 11l0 .01" />
			<path d="M4.63 15.1l0 .01" />
			<path d="M7.16 18.37l0 .01" />
			<path d="M11 19.94l0 .01" />
		</svg>
	);
};

const TransferIn = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth={1.25}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M4 18v3h16v-14l-8 -4l-8 4v3" />
			<path d="M4 14h9" />
			<path d="M10 11l3 3l-3 3" />
		</svg>
	);
};

const Chef = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth={1.25}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M12 3c1.918 0 3.52 1.35 3.91 3.151a4 4 0 0 1 2.09 7.723l0 7.126h-12v-7.126a4 4 0 1 1 2.092 -7.723a4 4 0 0 1 3.908 -3.151z" />
			<path d="M6.161 17.009l11.839 -.009" />
		</svg>
	);
};

const ShoppingCart = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth={1.25}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M17 17h-11v-14h-2" />
			<path d="M6 5l6 .429m7.138 6.573l-.143 1h-13" />
			<path d="M15 6h6m-3 -3v6" />
		</svg>
	);
};

const UserShield = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth={1.25}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M6 21v-2a4 4 0 0 1 4 -4h2" />
			<path d="M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5z" />
			<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
		</svg>
	);
};

const Branch = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth={1.25}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M19.258 10.258l-7.258 -7.258l-9 9h2v7a2 2 0 0 0 2 2h4" />
			<path d="M9 21v-6a2 2 0 0 1 2 -2h1.5" />
			<path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
		</svg>
	);
};

const TrashCross = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth={1.25}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path
				d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16zm-9.489 5.14a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z"
				strokeWidth={0}
				fill="currentColor"
			/>
			<path
				d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z"
				strokeWidth={0}
				fill="currentColor"
			/>
		</svg>
	);
};

const ArrowUpDown = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth={1.9}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M7 3l0 18" />
			<path d="M10 6l-3 -3l-3 3" />
			<path d="M20 18l-3 3l-3 -3" />
			<path d="M17 21l0 -18" />
		</svg>
	);
};

const Viewer = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth={1.25}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
			<path d="M6 21v-2a4 4 0 0 1 4 -4h1.5" />
			<path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M20.2 20.2l1.8 1.8" />
		</svg>
	);
};

const Download = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth={1.25}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
			<path d="M7 11l5 5l5 -5" />
			<path d="M12 4l0 12" />
		</svg>
	);
};

const Filter = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth={1.25}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path
				d="M6 3a1 1 0 0 1 .993 .883l.007 .117v3.171a3.001 3.001 0 0 1 0 5.658v7.171a1 1 0 0 1 -1.993 .117l-.007 -.117v-7.17a3.002 3.002 0 0 1 -1.995 -2.654l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-3.17a1 1 0 0 1 1 -1z"
				strokeWidth={0}
				fill="currentColor"
			/>
			<path
				d="M12 3a1 1 0 0 1 .993 .883l.007 .117v9.171a3.001 3.001 0 0 1 0 5.658v1.171a1 1 0 0 1 -1.993 .117l-.007 -.117v-1.17a3.002 3.002 0 0 1 -1.995 -2.654l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-9.17a1 1 0 0 1 1 -1z"
				strokeWidth={0}
				fill="currentColor"
			/>
			<path
				d="M18 3a1 1 0 0 1 .993 .883l.007 .117v.171a3.001 3.001 0 0 1 0 5.658v10.171a1 1 0 0 1 -1.993 .117l-.007 -.117v-10.17a3.002 3.002 0 0 1 -1.995 -2.654l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-.17a1 1 0 0 1 1 -1z"
				strokeWidth={0}
				fill="currentColor"
			/>
		</svg>
	);
};

const PDF = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth={1.25}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
			<path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"></path>
			<path d="M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"></path>
			<path d="M17 18h2"></path>
			<path d="M20 15h-3v6"></path>
			<path d="M11 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z"></path>
		</svg>
	);
};

const From = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth={1.25}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
			<path d="M12.02 21.485a1.996 1.996 0 0 1 -1.433 -.585l-4.244 -4.243a8 8 0 1 1 13.403 -3.651"></path>
			<path d="M16 22l5 -5"></path>
			<path d="M21 21.5v-4.5h-4.5"></path>
		</svg>
	);
};

const LeftArrow = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			aria-hidden="true"
			className="w-5"
		>
			<path
				fillRule="evenodd"
				d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

const RightArrow = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			aria-hidden="true"
			className="w-5"
		>
			<path
				fillRule="evenodd"
				d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
				clipRule="evenodd"
			/>
		</svg>
	);
};
const To = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth={1.25}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<path
				d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
				strokeWidth={0}
				fill="currentColor"
			></path>
		</svg>
	);
};

const Voucher = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth={1.25}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
			<path d="M7 16l3 -3l3 3" />
			<path d="M8 13c-.789 0 -2 -.672 -2 -1.5s.711 -1.5 1.5 -1.5c1.128 -.02 2.077 1.17 2.5 3c.423 -1.83 1.372 -3.02 2.5 -3c.789 0 1.5 .672 1.5 1.5s-1.211 1.5 -2 1.5h-4z" />
		</svg>
	);
};

const MenuDown = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			{...props}
		>
			<path
				fillRule="evenodd"
				d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

const LogoutIcon = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			{...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
			/>
		</svg>
	);
};

const MenuOpenClose = ({ id1, id2, className }) => {
	return (
		<>
			<svg
				id={id1}
				className={className}
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
			<svg
				id={id2}
				className={className}
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</>
	);
};

const Eye = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth={1.25}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
			<path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
		</svg>
	);
};

const Excel = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth={1.25}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
			<path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
			<path d="M8 11h8v7h-8z"></path>
			<path d="M8 15h8"></path>
			<path d="M11 11v7"></path>
		</svg>
	);
};

const Store = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth={1.25}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<path d="M3 21l18 0"></path>
			<path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4"></path>
			<path d="M5 21l0 -10.15"></path>
			<path d="M19 21l0 -10.15"></path>
			<path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"></path>
		</svg>
	);
};

const PPCUser = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth={1.25}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
			<path d="M6 21v-2a4 4 0 0 1 4 -4h2.5"></path>
			<path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
			<path d="M19.001 15.5v1.5"></path>
			<path d="M19.001 21v1.5"></path>
			<path d="M22.032 17.25l-1.299 .75"></path>
			<path d="M17.27 20l-1.3 .75"></path>
			<path d="M15.97 17.25l1.3 .75"></path>
			<path d="M20.733 20l1.3 .75"></path>
		</svg>
	);
};

const ProcurementUser = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth={1.25}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
			<path d="M6 21v-2a4 4 0 0 1 4 -4h3"></path>
			<path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"></path>
			<path d="M19 21v1m0 -8v1"></path>
		</svg>
	);
};

const ManagerUser = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth={1.25}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z"></path>
			<path d="M6.201 18.744a4 4 0 0 1 3.799 -2.744h4a4 4 0 0 1 3.798 2.741"></path>
			<path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
		</svg>
	);
};

const SparePartsUser = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth={1.25}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
			<path d="M6 21v-2a4 4 0 0 1 4 -4h3"></path>
			<path d="M18 21v-2a4 4 0 0 0 -4 -4h-3"></path>
			<path d="M15 12h-3l-2 -2l-2 2h-3"></path>
		</svg>
	);
};

export {
	Add,
	ArrowBack,
	ArrowUpDown,
	Background,
	Bell,
	Branch,
	Check,
	Chef,
	Close,
	Copy,
	Down,
	Download,
	DropDown,
	Edit,
	Excel,
	Eye,
	Filter,
	From,
	Kitchen,
	LeftArrow,
	LogoutIcon,
	ManagerUser,
	Menu,
	MenuDown,
	MenuOpenClose,
	PDF,
	PPCUser,
	ProcurementUser,
	Receive,
	RightArrow,
	Search,
	Send,
	ShoppingCart,
	SparePartsUser,
	Store,
	To,
	TransferIn,
	Trash,
	TrashCross,
	Up,
	Update,
	UserShield,
	Viewer,
	Voucher,
};
