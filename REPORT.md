## The problem your bot solved

We propose a bot that promotes positive reinforcement in collaborative projects involving multiple team members. Such a bot could be crucial especially in today's remote work environments, where people are unable to connect at an emotional level and tend to become demotivated when they are not rewarded for their collaborative efforts.

Our bot acts as a secondary reinforcer for actions such as answering GitHub issues, regular commits to a repository, and using positive words during conversations on Discord channels. Our bot aims to develop desirable stimuli among the users motivating them to collaborate more. The bot would provide channel statistics and self statistics features by monitoring the events on Discord channels and GitHub events. 

Students/colleagues are generally disinclined to come forward and assist their peers when collaboration is desired. A bot would be a good solution for overcoming the issue, since it's automatic with unbiased decision-making abilities would promote a healthy study/work environment. It would help in building a deeper personal connection with their team members. 

## Primary features and screenshots.

Our bot allow also provides user the following features:<br>
1. Rewards user for committing on Github repository <br>

User commits on Github Repository <br>

![image](https://media.github.ncsu.edu/user/22719/files/62f280fc-1f29-4723-80e1-3bdbd44168db)<br>

Bot rewards the user for the activity<br>

![image](https://media.github.ncsu.edu/user/22719/files/da868f84-1944-4b7a-a492-6d6fdbd36d28)<br>

2. Rewards user for closing an Github issue <br>

User closes an Github issue<br>

![image](https://media.github.ncsu.edu/user/22719/files/e491fb9d-4d35-4450-bc95-18f59775d930)<br>

Bot catches the activity and rewards the user for it<br>

![image](https://media.github.ncsu.edu/user/22719/files/d73fb2a3-d18b-472e-a875-f2048e1b8937)<br>

3. Using positive feedback for other team members in channel conversations<br>

User posts something positive on the discord channel<br>

![image](https://media.github.ncsu.edu/user/22719/files/a5fd7827-ca04-4565-8d48-c2e6e3b5d56f)<br>

Bot rewards user for the same<br>

![image](https://media.github.ncsu.edu/user/22719/files/834a14d5-b5f0-4055-9ff3-69644af6fe01)<br>

4. Statistical overview of a person’s rewards at that particular time<br>

User queries bot for his/her statistics<br>

![image](https://media.github.ncsu.edu/user/22719/files/41aaa7e1-c6cf-4b6e-a674-5807e0cad660)<br>

Bot sends the detailed statistics to the user<br>

![image](https://media.github.ncsu.edu/user/22719/files/95c419ab-c882-4d97-b049-495cfb5030fe)<br>

5. The leaderboard position of the server members at any particular time period<br>

User queries bot for the leaderboard<br>

![WhatsApp Image 2022-04-17 at 3 59 14 PM](https://media.github.ncsu.edu/user/22729/files/08ff3422-9996-41f8-b597-e1f889ef380a)<br>

Bot sends the detailed leaderboard<br>

![WhatsApp Image 2022-04-17 at 3 58 27 PM](https://media.github.ncsu.edu/user/22729/files/ef6db8b6-ef7b-42d6-80ec-e1cf770bd8e4)<br>


## Reflection on the development process and project

#### Software Engineering Practices
We implemented "Pair Programming”, a core practice in our project. In the sprints, each use case was worked upon by a pair of two people. So, two team members worked on one task at a time in which one team member would write the code while the other team member would monitor and evaluate the programming logic of the written code. These roles were switched between the two team members periodically.
</br>

We incorporated the following Corollary practices:
- Incremental deployment: This ensured that the latest code was deployed regulary and was being tested to find bugs in an early stage. 
- Shared Code: All of our project code base is set up on the shared github repository and hence it helped all of us to keep progress of each other's individual work   and contribution with the help of Github Issues, commits, PR reviews, Kansan board.
- Team Continuity: All of our team members have equally contributed to the project. On some days, even though someone completed his/her daily tasks then also he/she   collaborated with the other team member who was yet to complete his/her daily task. This shows that our team members always sticked together and worked as a team   should work.

#### GitHub issues

Right from the first milestone we created issues for the tasks with an assignee and appropriate label for the issues. Everyone ensured appropriate comments are added to the issues before closing.

#### Github branches
‘Dev’ branch was created from the main branch. Every team member created a feature branch with the name ‘unityId-feature-name’ which was merged to dev branch. We made sure no change goes directly to the main/dev branch. The changes from dev branch were merged twice on regular intervals during the ongoing milestone, ensuring that the latest changes are incorporated in the main branch. Also the branches were deleted to avoid the stale branches in the project.

#### PR review process
It was ensured that no branch is directly merged into the dev branch without a pull request. Also the pull requests were reviewed by at least one team member. The same process was followed when dev branch was being merged into main branch.

#### Scrum meetings
Scrum meetings were conducted daily during Sprint1, Sprint2 and the deploy milestone regularly in the morning. This process was extremely helpful as everyone shared what tasks were completed on the previous day, what tasks would be in progress that day and if there were any blockers. The scrum meetings and the meeting notes helped in checkpointing and that we stayed organized and rightly paced. The project Kanban board was reviewed regularly during scrum meetings and the issues were moved rightly to In progress and done according to the status of the tasks.
</br>

## Limitations and Future work
### Limitations:
- The Reward bot provides static points to the users for doing commits irrespective of the length of the commit (+/-, additions/deletions) made by the user.
- The Reward bot provides static points to the users for closing issues irrespective of the priority of issue solved by the user.
- The GitHub use-cases of the bot is limited to few github actions only i.e. commits made and issues closed.

### Future Work:
- The Reward bot could judge the degree of commit made by the user. For eg. Dynamic points could be provided to the user according to the intensity of the commit made by the user.
- The Reward bot could judge the degree of issue closed by the user. For eg. Dynamic points could be provided to the user according to the priority of issue closed by the user.
- The Reward bot could assign badges to the user if they bag a certain level of points.


## Final project presentation video
https://drive.google.com/file/d/1hRkyhMemptA3s3amoNGo6mZIeHa_XguI/view?usp=sharing
