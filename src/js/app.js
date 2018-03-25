var app = new Vue({
    el: '#resume',
    data : {
        education: {
            'title': 'Education',
            'data': 
            [
                {   
                    date: 'July 2012 - May 2015', 
                    title: 'Bachelor of Business Administration', 
                    subTitle: '', 
                    message: 'I did my bachelor degree on management from Guru Nanak Institute of Management and Technology, Model Town, Ludhiana, Punjab, India.' 
                },
                {   
                    date: 'July 2016 - PRESENT', 
                    title: 'Masters of Arts', 
                    subTitle: '', 
                    message: 'I am pursing masters of arts (vocal) in Indian Classical Music and Gurmat Sangeet from Sri Guru Granth Sahib World University, Fatehgarh Sahib, Punjab, India.' 
                },
                {   
                    date: 'May 2008 - May 2012', 
                    title: 'Gurmat Sangeet Course', 
                    subTitle: '', 
                    message: 'I did a professional Course in Dilruba Instrument from Jawaddi Taksal, Ludhiana, Punjab, India.' 
                }  
            ]
        },
        achievements: {
            'title': 'Achievements',
            'data':  
                [
                    {   
                        date: '2013 and 2017', 
                        title: 'National Youth Festival', 
                        subTitle: '', 
                        message: 'I took part in AIU Youth festivals & performed in Naional Zonal Youth festival 2013 in Lucknow & 2017 in Kanpur.' 
                    },
                    {   
                        date: 'September 2016', 
                        title: 'Tlep Internationl Music Competition', 
                        subTitle: '', 
                        message: 'I was awarded with PEOPLE Choice in Ist International Music Competition named after Tlep Aspantayuly held at Astana City, Kazakhstan.' 
                    },
                    {   
                        date: 'Novemember 2016', 
                        title: 'Gavo Sachi Baani', 
                        subTitle: '', 
                        message: 'Participated in PTC Punjabi\' Gurbani Reality Show GAVO SACHI BANI and competed till studion rounds.' 
                    }  
                ]
        }
    }
});

// Closing Menu when Menu Item is clicked
$('.nav a').on('click', function() {
    $('.navbar-toggle').click();
});
