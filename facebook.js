'use scrict';

$(document).ready(function(){
    
var masyvas = [
            {
                title: 'Rusija',
                pav: [ 'img/zero.png' ],
                laikas: '29 June at 10:28',
				background: 'normal'
            },
            {
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis.',
                pav: '',
                laikas: '29 June at 10:28',
				background: 'normal'
            },
            {
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean euismod bibendum laoreet. Cum sociis natoque penatibus et magnis dis... <a href="#">See More</a>',
                pav: '',
                laikas: '29 June at 10:28',
				background: 'normal'
            },
            {
                title: 'Rusija ir Putinas',
                pav: [ 'img/zero.png', 'img/zero.png' ],
                laikas: '29 June at 10:28',
				background: 'normal'
            },
            {
                title: 'Rusija ir Putinas ir Medvedevas',
                pav: [ 'img/zero.png', 'img/zero.png', 'img/zero.png' ],
                laikas: '29 June at 10:28',
				background: 'normal'
            },
            {
                title: 'Rusija ir Putinas ir Medvedevas ir kazks',
                pav: [ 'img/zero.png', 'img/zero.png', 'img/zero.png', 'img/zero.png' ],
                laikas: '29 June at 10:28',
				background: 'normal'
            },
			{
				title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				pav: '',
				laikas: '29 June at 10:28',
				background: 'special'
			}
        ];


function masyvo_generavimas( masyvas ){
	var HTML = '',
		masyvo_dydis = masyvas.length;
	
	for ( var i=0; i<masyvo_dydis; i++ ) {
        
        HTML += '<div class="post">\
            <header>\
					<i class="fa fa-bars icon3"></i>\
                    <img class="image11" src="https://g3.dcdn.lt/images/pix/dalia-grybauskaite-77500865.jpg">\
                    <div class="info">\
                        <a class="vardas" href="#">Dalia Grybauskaite</a>\
                        <a class="data" href="#">' + masyvas[i].laikas + '</a>\
                    </div>\
            </header>\
            <p class="' + masyvas[i].background +'">' + masyvas[i].title + '</p>';
		
            switch (masyvas[i].pav.length) {
			case 0:
					HTML += '<hr>';
					break;		
			case 1:
					HTML += '<img class="image1" src="' + masyvas[i].pav[0] + '">';
					break;
			case 2:
					HTML += '<img class="image2" src="' + masyvas[i].pav[0] + '">';
					HTML += '<img class="image2" src="' + masyvas[i].pav[1] + '">';
					break;
			case 3:
					HTML += '<img class="image3" src="' + masyvas[i].pav[0] + '">';
					HTML += '<img class="image4" src="' + masyvas[i].pav[1] + '">';
					HTML += '<img class="image4" src="' + masyvas[i].pav[2] + '">';
					break;
			case 4:
					HTML += '<img class="image2" src="' + masyvas[i].pav[0] + '">';
					HTML += '<img class="image5" src="' + masyvas[i].pav[1] + '">';
					HTML += '<img class="image5" src="' + masyvas[i].pav[2] + '">';
					HTML += '<img class="image5" src="' + masyvas[i].pav[3] + '">';
					break;
}

        HTML += '<div class="likeshare">\
				<div class="thumbsup">\
					<i class="fa fa-thumbs-up">    Like</i>\
				</div>\
				<div class="share">\
					<i class="fa fa-share">    Share</i>\
				</div>\
			</div>\
            <div class="likelove">\
			<hr>\
                <i class="fa fa-thumbs-up"></i><i class="fa fa-heart"></i> 100000000000000000000\
			<hr>\
            </div>\
		<div class="comment">\
				<i class="fa fa-smile-o icon"></i>\
                <i class="fa fa-camera icon2"></i>\
                <img class="image11 i11" src="https://g3.dcdn.lt/images/pix/dalia-grybauskaite-77500865.jpg">\
                <input placeholder="Write a comment...">\
		</div>\
		</div>';
             
    }
	$('body').html( HTML );
    
}

masyvo_generavimas(masyvas);

function paveiksl( HTML , i ) {
		var n= masyvas[i].pav.length;
		
	switch (n) {	
			case 0:
					HTML += '<img class="image1" src="' + masyvas[i].pav[1] + '">';
					break;
			case 1:
					HTML += '<img class="image2" src="' + masyvas[i].pav[1] + '">';
					HTML += '<img class="image2" src="' + masyvas[i].pav[2] + '">';
					break;
			case 2:
					HTML += '<img class="image3" src="' + masyvas[i].pav[1] + '">';
					HTML += '<img class="image4" src="' + masyvas[i].pav[2] + '">';
					HTML += '<img class="image4" src="' + masyvas[i].pav[3] + '">';
					break;
			case 3:
					HTML += '<img class="image2" src="' + masyvas[i].pav[1] + '">';
					HTML += '<img class="image5" src="' + masyvas[i].pav[2] + '">';
					HTML += '<img class="image5" src="' + masyvas[i].pav[3] + '">';
					HTML += '<img class="image5" src="' + masyvas[i].pav[4] + '">';
					break;
}
		return HTML;
}

    
    

    
});