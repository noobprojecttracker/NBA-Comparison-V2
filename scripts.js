const players = ['A.J. Green', 'A.J. Lawson', 'AJ Griffin', 'Aaron Gordon', 'Aaron Holiday', 'Aaron Nesmith', 'Aaron Wiggins', 'Admiral Schofield', 'Al Horford', 'Alec Burks', 'Aleksej Pokusevski', 'Alex Caruso', 'Alex Len', 'Alize Johnson', 'Alondes Williams', 'Alperen Sengun', 'Amir Coffey', 'Andre Drummond', 'Andre Iguodala', 'Andrew Nembhard', 'Andrew Wiggins', 'Anfernee Simons', 'Anthony Davis', 'Anthony Edwards', 'Anthony Gill', 'Anthony Lamb', 'Austin Reaves', 'Austin Rivers', 'Ayo Dosunmu', 'Bam Adebayo', 'Ben Simmons', 'Bennedict Mathurin', 'Bismack Biyombo', 'Blake Griffin', 'Blake Wesley', 'Boban Marjanovic', 'Bobby Portis', 'Bogdan Bogdanovic', 'Bojan Bogdanovic', 'Bol Bol', 'Bones Hyland', 'Bradley Beal', 'Brandon Boston Jr.', 'Brandon Clarke', 'Brandon Ingram', 'Braxton Key', 'Brook Lopez', 'Bruce Brown', 'Bruno Fernando', 'Bryce McGowens', 'Bryn Forbes', 'Buddy Boeheim', 'Buddy Hield', 'CJ McCollum', 'Cade Cunningham', 'Caleb Houstan', 'Caleb Martin', 'Cam Reddish', 'Cam Thomas', 'Cameron Johnson', 'Cameron Payne', 'Caris LeVert', 'Carlik Jones', 'Cedi Osman', 'Chance Comanche', 'Charles Bassey', 'Chima Moneke', 'Chimezie Metu', 'Chris Boucher', 'Chris Duarte', 'Chris Paul', 'Chris Silva', 'Christian Braun', 'Christian Koloko', 'Christian Wood', 'Chuma Okeke', 'Clint Capela', 'Coby White', 'Cody Martin', 'Cody Zeller', 'Cole Anthony', 'Cole Swider', 'Collin Sexton', 'Corey Kispert', 'Cory Joseph', "D'Angelo Russell", 'Daishen Nix', 'Dalano Banton', 'Dalen Terry', 'Damian Jones', 'Damian Lillard', 'Damion Lee', 'Daniel Gafford', 'Daniel Theis', 'Danny Green', 'Danuel House Jr.', 'Dario Saric', 'Darius Bazley', 'Darius Days', 'Darius Garland', 'David Duke Jr.', 'David Roddy', 'Davion Mitchell', 'Davis Bertans', 'Davon Reed', "Day'Ron Sharpe", "De'Aaron Fox", "De'Andre Hunter", "De'Anthony Melton", 'DeAndre Jordan', 'DeMar DeRozan', 'Dean Wade', 'Deandre Ayton', 'Dejounte Murray', 'Delon Wright', 'Deni Avdija', 'Dennis Schroder', 'Dennis Smith Jr.', 'Deonte Burton', 'Dereon Seabron', 'Derrick Jones Jr.', 'Derrick Rose', 'Derrick White', 'Desmond Bane', 'Devin Booker', 'Devin Vassell', 'Devon Dotson', "Devonte' Graham", 'Dewayne Dedmon', 'Dillon Brooks', 'Domantas Sabonis', 'Dominick Barlow', 'Donovan Mitchell', 'Donovan Williams', 'Donte DiVincenzo', 'Dorian Finney-Smith', 'Doug McDermott', 'Draymond Green', 'Drew Eubanks', 'Dru Smith', 'Duane Washington Jr.', 'Duncan Robinson', 'Dwight Powell', 'Dylan Windler', 'Dyson Daniels', 'Edmond Sumner', 'Eric Gordon', 'Eugene Omoruyi', 'Evan Fournier', 'Evan Mobley', 'Facundo Campazzo', 'Frank Jackson', 'Frank Kaminsky', 'Frank Ntilikina', 'Franz Wagner', 'Fred VanVleet', 'Furkan Korkmaz', 'Gabe Vincent', 'Gabe York', 'Garrett Temple', 'Garrison Mathews', 'Gary Harris', 'Gary Payton II', 'Gary Trent Jr.', 'George Hill', 'Georges Niang', 'Giannis Antetokounmpo', 'Goga Bitadze', 'Goran Dragic', 'Gordon Hayward', 'Gorgui Dieng', 'Grant Williams', 'Grayson Allen', 'Greg Brown III', 'Hamidou Diallo', 'Harrison Barnes', 'Haywood Highsmith', 'Herbert Jones', 'Immanuel Quickley', 'Isaac Okoro', 'Isaiah Hartenstein', 'Isaiah Jackson', 'Isaiah Joe', 'Isaiah Livers', 'Isaiah Mobley', 'Isaiah Roby', 'Isaiah Stewart', 'Isaiah Todd', 'Ish Smith', 'Ish Wainright', 'Ivica Zubac', 'JD Davison', 'JT Thor', 'Ja Morant', 'JaMychal Green', 'JaVale McGee', 'Jabari Smith Jr.', 'Jabari Walker', 'Jack White', 'Jacob Gilyard', 'Jaden Hardy', 'Jaden Ivey', 'Jaden McDaniels', 'Jaden Springer', 'Jae Crowder', "Jae'Sean Tate", 'Jake LaRavia', 'Jakob Poeltl', 'Jalen Brunson', 'Jalen Duren', 'Jalen Green', 'Jalen Johnson', 'Jalen McDaniels', 'Jalen Smith', 'Jalen Suggs', 'Jalen Williams', 'Jamal Cain', 'Jamal Murray', 'Jamaree Bouyea', 'James Bouknight', 'James Harden', 'James Johnson', 'James Wiseman', 'Jared Butler', 'Jared Rhoden', 'Jaren Jackson Jr.', 'Jarred Vanderbilt', 'Jarrell Brantley', 'Jarrett Allen', 'Jarrett Culver', 'Jason Preston', 'Javonte Green', 'Jaxson Hayes', 'Jay Huff', 'Jay Scrubb', 'Jaylen Brown', 'Jaylen Nowell', 'Jaylin Williams', 'Jayson Tatum', 'Jeenathan Williams', 'Jeff Dowtin', 'Jeff Green', 'Jerami Grant', 'Jeremiah Robinson-Earl', 'Jeremy Sochan', 'Jericho Sims', 'Jevon Carter', 'Jimmy Butler', 'Jock Landale', 'Joe Harris', 'Joe Ingles', 'Joe Wieskamp', 'Joel Embiid', 'John Butler', 'John Collins', 'John Konchar', 'John Wall', 'Johnny Davis', 'Johnny Juzang', 'Jonas Valanciunas', 'Jonathan Isaac', 'Jonathan Kuminga', 'Jordan Clarkson', 'Jordan Goodwin', 'Jordan Hall', 'Jordan McLaughlin', 'Jordan Nwora', 'Jordan Poole', 'Jordan Schakel', 'Jose Alvarado', 'Josh Christopher', 'Josh Giddey', 'Josh Green', 'Josh Hart', 'Josh Minott', 'Josh Okogie', 'Josh Richardson', 'Joshua Primo', 'Jrue Holiday', 'Juan Toscano-Anderson', 'Juancho Hernangomez', 'Julian Champagnie', 'Julius Randle', 'Justin Champagnie', 'Justin Holiday', 'Justin Jackson', 'Justin Minaya', 'Justise Winslow', 'Jusuf Nurkic', 'KZ Okpala', 'Kai Jones', 'Karl-Anthony Towns', 'Kawhi Leonard', 'Keegan Murray', 'Keita Bates-Diop', 'Keldon Johnson', 'Kelly Olynyk', 'Kelly Oubre Jr.', 'Kemba Walker', 'Kendall Brown', 'Kendrick Nunn', 'Kennedy Chandler', 'Kenneth Lofton Jr.', 'Kenrich Williams', 'Kentavious Caldwell-Pope', 'Kenyon Martin Jr.', 'Keon Ellis', 'Keon Johnson', 'Kessler Edwards', 'Kevin Durant', 'Kevin Huerter', 'Kevin Knox', 'Kevin Love', 'Kevin Porter Jr.', 'Kevon Harris', 'Kevon Looney', 'Khem Birch', 'Khris Middleton', 'Killian Hayes', 'Kira Lewis Jr.', 'Klay Thompson', 'Kobi Simmons', 'Kris Dunn', 'Kristaps Porzingis', 'Kyle Anderson', 'Kyle Kuzma', 'Kyle Lowry', 'Kyrie Irving', 'LaMelo Ball', 'Lamar Stevens', 'Landry Shamet', 'Larry Nance Jr.', 'Lauri Markkanen', 'LeBron James', 'Leandro Bolmaro', 'Lester Quinones', 'Lindell Wigginton', 'Lindy Waters III', 'Lonnie Walker IV', 'Louis King', 'Luguentz Dort', 'Luka Doncic', 'Luka Garza', 'Luka Samanic', 'Luke Kennard', 'Luke Kornet', 'Mac McClung', 'Malachi Flynn', 'Malaki Branham', 'Malcolm Brogdon', 'Malcolm Hill', 'Malik Beasley', 'Malik Monk', 'Mamadi Diakite', 'MarJon Beauchamp', 'Marcus Morris', 'Marcus Smart', 'Mark Williams', 'Markelle Fultz', 'Markieff Morris', 'Marko Simonovic', 'Marvin Bagley III', 'Mason Plumlee', 'Matisse Thybulle', 'Matt Ryan', 'Matthew Dellavedova', 'Max Christie', 'Max Strus', 'Maxi Kleber', 'McKinley Wright IV', 'Meyers Leonard', 'Mfiondu Kabengele', 'Micah Potter', 'Michael Carter-Williams', 'Michael Foster Jr.', 'Michael Porter Jr.', 'Mikal Bridges', 'Mike Conley', 'Mike Muscala', 'Miles McBride', 'Mitchell Robinson', 'Mo Bamba', 'Monte Morris', 'Montrezl Harrell', 'Moritz Wagner', 'Moses Brown', 'Moses Moody', 'Moussa Diabate', 'Myles Turner', 'Naji Marshall', 'Nassir Little', 'Nathan Knight', 'Naz Reid', 'Neemias Queta', 'Nerlens Noel', 'Nic Claxton', 'Nick Richards', 'Nickeil Alexander-Walker', 'Nicolas Batum', 'Nikola Jokic', 'Nikola Jovic', 'Nikola Vucevic', 'Noah Vonleh', 'Norman Powell', 'OG Anunoby', 'Obi Toppin', 'Ochai Agbaji', 'Olivier Sarr', 'Omer Yurtseven', 'Onyeka Okongwu', 'Orlando Robinson', 'Oshae Brissett', 'Otto Porter Jr.', 'Ousmane Dieng', 'P.J. Tucker', 'P.J. Washington', 'PJ Dozier', 'Paolo Banchero', 'Pascal Siakam', 'Pat Connaughton', 'Patrick Baldwin Jr.', 'Patrick Beverley', 'Patrick Williams', 'Patty Mills', 'Paul George', 'Paul Reed', 'Payton Pritchard', 'Peyton Watson', 'Precious Achiuwa', 'Quentin Grimes', 'Quenton Jackson', 'R.J. Hampton', 'RJ Barrett', 'RaiQuan Gray', 'Raul Neto', 'Reggie Bullock', 'Reggie Jackson', 'Richaun Holmes', 'Ricky Rubio', 'Robert Covington', 'Robert Williams', 'Robin Lopez', 'Rodney McGruder', 'Romeo Langford', 'Ron Harper Jr.', "Royce O'Neale", 'Rudy Gay', 'Rudy Gobert', 'Rui Hachimura', 'Russell Westbrook', 'Ryan Arcidiacono', 'Ryan Rollins', 'Saben Lee', 'Saddiq Bey', 'Sam Hauser', 'Sam Merrill', 'Sandro Mamukelashvili', 'Santi Aldama', 'Scottie Barnes', 'Scotty Pippen Jr.', 'Serge Ibaka', 'Seth Curry', 'Shaedon Sharpe', 'Shai Gilgeous-Alexander', 'Shake Milton', 'Shaquille Harrison', 'Simone Fontecchio', 'Skylar Mays', 'Spencer Dinwiddie', 'Stanley Johnson', 'Stanley Umude', 'Stephen Curry', 'Sterling Brown', 'Steven Adams', 'Svi Mykhailiuk', 'T.J. McConnell', 'T.J. Warren', 'Taj Gibson', 'Talen Horton-Tucker', 'Tari Eason', 'Taurean Prince', 'Terance Mann', 'Terence Davis', 'Terrence Ross', 'Terry Rozier', 'Terry Taylor', 'Thaddeus Young', 'Thanasis Antetokounmpo', 'Theo Maledon', 'Theo Pinson', 'Thomas Bryant', 'Tim Hardaway Jr.', 'Tobias Harris', 'Tony Bradley', 'Torrey Craig', 'Trae Young', 'Tre Jones', 'Tre Mann', 'Trendon Watford', 'Trent Forrest', 'Trevelin Queen', 'Trevor Hudgins', 'Trevor Keels', 'Trey Lyles', 'Trey Murphy III', 'Troy Brown Jr.', 'Ty Jerome', 'TyTy Washington Jr.', 'Tyler Dorsey', 'Tyler Herro', 'Tyrese Haliburton', 'Tyrese Martin', 'Tyrese Maxey', 'Tyus Jones', 'Udoka Azubuike', 'Udonis Haslem', 'Usman Garuba', 'Vernon Carey Jr.', 'Victor Oladipo', 'Vince Williams Jr.', 'Vit Krejci', 'Vlatko Cancar', 'Walker Kessler', 'Wendell Carter Jr.', 'Wendell Moore Jr.', 'Wenyen Gabriel', 'Wesley Matthews', 'Will Barton', 'Willy Hernangomez', 'Xavier Cooks', 'Xavier Moon', 'Xavier Sneed', 'Xavier Tillman Sr.', 'Yuta Watanabe', 'Zach Collins', 'Zach LaVine', 'Zeke Nnaji', 'Ziaire Williams', 'Zion Williamson']



const teamColors = {
    'Atlanta Hawks': '(225, 68, 52)',
    'Boston Celtics': '(0, 122, 51)',
    'Brooklyn Nets': '(0, 0, 0)',
    'Charlotte Hornets': '(29, 17, 96)',
    'Chicago Bulls': '(206, 17, 65)',
    'Cleveland Cavaliers': '(134, 0, 56)',
    'Dallas Mavericks': '(0, 83, 188)',
    'Denver Nuggets': '(13, 34, 64)',
    'Detroit Pistons': '(200, 16, 46)',
    'Golden State Warriors': '(29, 66, 138)',
    'Houston Rockets': '(206, 17, 65)',
    'Indiana Pacers': '(0, 45, 98)',
    'Los Angeles Clippers': '(200, 16, 46)',
    'Los Angeles Lakers': '(85, 37, 130)',
    'Memphis Grizzlies': '(93, 118, 169)',
    'Miami Heat': '(152, 0, 46)',
    'Milwaukee Bucks': '(0, 71, 27)',
    'Minnesota Timberwolves': '(12, 35, 64)',
    'New Orleans Pelicans': '(0, 22, 65)',
    'New York Knicks': '(0, 107, 182)',
    'Oklahoma City Thunder': '(0, 125, 195)',
    'Orlando Magic': '(0, 125, 197)',
    'Philadelphia 76ers': '(0, 107, 182)',
    'Phoenix Suns': '(29, 17, 96)',
    'Portland Trail Blazers': '(224, 58, 62)',
    'Sacramento Kings': '(91, 43, 130)',
    'San Antonio Spurs': '(196, 206, 211)',
    'Toronto Raptors': '(206, 17, 65)',
    'Utah Jazz': '(0, 43, 92)',
    'Washington Wizards': '(0, 43, 92)'
}



// Get the button element
const button = document.getElementById("button");

// Get the player names from the input fields
const player1Name = document.getElementById("player1");
const player2Name = document.getElementById("player2");

// These are the unordered list elements for each input box
const list1 = document.getElementById('list-1');
const list2 = document.getElementById('list-2');

// Get the location where we print comparison statement
const statement = document.getElementById('statement');



// Add an event listener to the input field to track when a user types into the field. When a user types, generate a list of possible players they could be searching for and reform the list to include this data.
player1Name.addEventListener('input', function(){
    const filteredData = filterData(players, player1Name.value);
    if (player1Name.value === ''){
        loadData([''], list1, 1);
    }
    else{
        loadData(filteredData, list1, 1);
    }
});

// Same as above but for player2
player2Name.addEventListener('input', function(){
    const filteredData = filterData(players, player2Name.value);
    if (player2Name.value === ''){
        loadData([''], list2, 1000);
    }
    else{
        loadData(filteredData, list2, 1000);
    }
});

// This event listener makes the dropdown list collapse when you click off of the list elements by emptying the lists
document.addEventListener('click', function(event){
    const outsideClick = !list1.contains(event.target)
    if (outsideClick){
        list1.innerHTML = '';
        list2.innerHTML = '';
    }
})

// This function takes an array of possible player names and filters it down to only include the player names that include the user's current input. It is called to every type the user types into an input field.
function filterData(data, searchText){
    return data.filter((playerName) => playerName.toLowerCase().includes(searchText.toLowerCase()));

}

// This function adds a list element under the input field for each player in an array of players. The list elements that get added to the innerHTML include unique IDs to reference to later and an onclick to call to the placeNameInInputBox() function. The purpose of the whichList parameter is to differentiate between which list element has which id for which player. If it was not here, and the same players in different lists had the same elements, then clicking on the second input's results would place the name in input box 1.
function loadData(data, theElement, whichList){
    theElement.innerHTML = '';
    for (let i=0; i<data.length; i++){
        var currPlayer = data[i];
        const list = `<li onclick="placeNameInInputBox(${i+whichList})" id=${i+whichList}>${currPlayer}</li>`;
        theElement.innerHTML += list;
    }
}

// Returns the id of a player given their name ex {Lebron James}
async function getID(name){
    const url = `https://www.balldontlie.io/api/v1/players?search=${name}`;
    const getInfo = await fetch(url);
    const data = await getInfo.json();
    const id = data.data[0].id;
    
    return id;
}

// Takes the ID of player and returns their PPG, RPG, APG, FG%, 3PT%, FT%, and team name in an array called 'stats'
async function getData(playerID, playerName){
    const url = `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerID}&season=2022`;
    const getInfo = await fetch(url);
    const data = await getInfo.json();
    var stats = Array();

    stats.push(data.data[0].pts);
    stats.push(data.data[0].ast);
    stats.push(data.data[0].reb);

    stats.push(data.data[0].fg_pct);
    stats.push(data.data[0].fg3_pct);
    stats.push(data.data[0].ft_pct);

    var nameSplit = playerName.split(" ");
    const nameURL = `https://www.balldontlie.io/api/v1/players?search=${nameSplit[0]}_${nameSplit[1]}`;

    const nameInfo = await fetch(nameURL);
    const nameData = await nameInfo.json();
    const playerTeam = (nameData.data[0].team.full_name);
    stats.push(teamColors[playerTeam]);

    return stats;
}


// This function is called when the user clicks on an element from the dropdown list. It puts the player's name that they clicked on into the input box. If the elementID >= 1000, this indicates that the user clicked on a player in the second dropdown list. After placing the player's name into the input box, it empties the lists, effectively collapsing the dropdown menus
function placeNameInInputBox(elementID){
    const playerName = document.getElementById(elementID);
    if (elementID >= 1000){
        player2Name.value = playerName.innerHTML;
    }
    else{
        player1Name.value = playerName.innerHTML;
    }
    list1.innerHTML = '';
    list2.innerHTML = '';
}


// This function takes the chart1 and chart2 element IDs and places default charts in this box to show to the user before they have any input and clicked compare. It shows default player names and random stats in the charts. The colors are defaulted to NBA logo colors. It returns the charts so that they can be modified later
function defaultChart(chart1, chart2){
    var theFirstChart = chart1.getContext('2d');
    const myChart = new Chart(theFirstChart, {
        type: 'bar',
        data: {
            labels: ['PPG','APG', 'RPG'],
            datasets: [{
                label: `Player 1`,
                data: [18, 7, 5],
                backgroundColor: [
                    'rgba(23, 64, 139)',
                    'rgba(23, 64, 139)',
                    'rgba(23, 64, 139)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderWidth: 1
            }, 
            {
                label: `Player 2`,
                data: [25, 12, 4],
                backgroundColor: [
                    'rgba(201, 8, 42)',
                    'rgba(201, 8, 42)',
                    'rgba(201, 8, 42)'
                ],
                borderColor: [
                    'rgba(155, 99, 132, 0.2)',
                    'rgba(155, 99, 132, 0.2)',
                    'rgba(155, 99, 132, 0.2)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: false
                },
                y: {
                    max: 35,
                    beginAtZero: true,
                    stacked: false
                }
            }

        }
    })
    var theSecondChart = chart2.getContext('2d');
    const myChart2 = new Chart(theSecondChart, {
        type: 'bar',
        data: {
            labels: ['FG%','3PT%', 'FT%'],
            datasets: [{
                label: `Player 1`,
                data: [.38, .33, .74],
                backgroundColor: [
                    'rgba(23, 64, 139)',
                    'rgba(23, 64, 139)',
                    'rgba(23, 64, 139)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderWidth: 1
            }, 
            {
                label: `Player 2`,
                data: [.49, .41, .92],
                backgroundColor: [
                    'rgba(201, 8, 42)',
                    'rgba(201, 8, 42)',
                    'rgba(201, 8, 42)'
                ],
                borderColor: [
                    'rgba(155, 99, 132, 0.2)',
                    'rgba(155, 99, 132, 0.2)',
                    'rgba(155, 99, 132, 0.2)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    stacked: false
                },
                y: {
                    max: 1,
                    beginAtZero: true,
                    stacked: false
                }
            }
        }
    })

    return [myChart, myChart2];

}

// Get the chart locations by element ID
const chart1 = document.getElementById('chart1');
const chart2 = document.getElementById('chart2');
// Spawn the default charts and store the resulting array in this variable to modify them later
var theDefaultChart = defaultChart(chart1, chart2);


// This function updates the first chart given the chart location, the player names, and the arrays containing their stats and info. It also sets the chart colors to be the player's team's colors
function updateChart(chart, name1, name2, stats1, stats2){
    chart.data.datasets[0].label = name1;
    chart.data.datasets[0].data = [stats1[0], stats1[1], stats1[2]];
    chart.data.datasets[0].backgroundColor = [
        `rgba${[stats1[6]]}`
    ]


    chart.data.datasets[1].label = name2;
    chart.data.datasets[1].data = [stats2[0], stats2[1], stats2[2]];
    chart.data.datasets[1].backgroundColor = [
        `rgba${[stats2[6]]}`
    ]

    chart.update()
}

// This function updates the second chart given the chart location, the player names, and the arrays containing their stats and info. It also sets the chart colors to be the player's team's colors
function updateChart2(chart, name1, name2, stats1, stats2){
    chart.data.datasets[0].label = name1;
    chart.data.datasets[0].data = [stats1[3], stats1[4], stats1[5]];
    chart.data.datasets[0].backgroundColor = [
        `rgba${[stats1[6]]}`
    ]

    chart.data.datasets[1].label = name2;
    chart.data.datasets[1].data = [stats2[3], stats2[4], stats2[5]];
    chart.data.datasets[1].backgroundColor = [
        `rgba${[stats2[6]]}`
    ]

    chart.update();
}


// This function is called to when the player clicks the compare button. It takes the player's names and calls to every other function to form the charts with the proper arguments.
function main(){
    const p1Name = player1Name.value;
    const p2Name = player2Name.value;


    Promise.all(
        [getID(p1Name), getID(p2Name)]).then(
            ([id1, id2]) => 
            
            Promise.all(
            [getData(id1, p1Name), getData(id2, p2Name)])).then(
                ([data1, data2]) =>
                
                updateChart(theDefaultChart[0], p1Name, p2Name, data1, data2)
            )

    Promise.all(
        [getID(p1Name), getID(p2Name)]).then(
            ([id1, id2]) => 
            
            Promise.all(
            [getData(id1, p1Name), getData(id2, p2Name)])).then(
                ([data1, data2]) =>
                
                updateChart2(theDefaultChart[1], p1Name, p2Name, data1, data2)
            )
    
    if ((p1Name === '') || (p2Name === '')){
        statement.innerHTML = `Please select 2 players before clicking compare!`;
    }
    else{
        statement.innerHTML = `View ${p1Name} vs ${p2Name}'s stats compared below...`;
    }


}










