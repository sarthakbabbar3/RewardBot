# Problem Statement

At some point in our lives, we all must have been involved in collaborative projects involving multiple team members. In such work environments, the role of recognition or simply praising team members for their efforts becomes imperative. The existence of positive reinforcement in maintaining human relationships is extremely essential.  Studies show that about 79% of employees who quit their jobs claim that a lack of appreciation was a major reason for leaving. 
<br><br> Especially during the pandemic, recognizing efforts have become even more important in today’s remote work environment, where people are not able to connect at an emotional level and tend to become demotivated when they are not rewarded for their collaborative efforts. The existence of an automated tool that recognizes and rewards efforts of employees and students will increase productivity, team cohesiveness, and employee retention.

# Bot Description

We propose a bot that acts as a secondary reinforcer for actions such as answering GitHub issues, regular commits to a repository, and using positive words during conversations on MatterMost channels. Our bot aims to develop desirable stimuli among the users which would ultimately maximize reinforcing consequences that would motivate them to collaborate more. Along with the rewards, the bot would provide channel statistics and self statistics features. This would be achieved by monitoring the events on Mattermost channels and GitHub events and accordingly points would be awarded based on the respective action. The reward system would be level-based, whenever a user would accumulate a certain number of points, they would earn a badge specific to the level attained.
<br><br> Students/colleagues are generally disinclined to come forward and assist their peers when collaboration is desired. A bot would be a good solution for overcoming the issue, since it's automatic with unbiased decision-making abilities would promote a healthy study/work environment where each and everyone benefits. It would help in building a deeper personal connection with their team members. The bot just responds to events. The bot does not fit into categories that have been discussed during the class.

### Tagline: Together we achieve more

# Use Cases

### Use Case 1
#### Use Case: Providing rewards for answering Github issues<br>
#### 1 Preconditions<br>
   &nbsp;&nbsp;&nbsp;&nbsp; The user must post an answer for the GitHub issue.<br>
   &nbsp;&nbsp;&nbsp;&nbsp; The user must be registered with Discord.<br>
   &nbsp;&nbsp;&nbsp;&nbsp; The Github token must be available to access the repository where the issue is posted.<br>
   &nbsp;&nbsp;&nbsp;&nbsp; The database must exist to make entries for the users.<br>
#### 2 Main Flow<br>
&nbsp;&nbsp;&nbsp;&nbsp; Bot detects the event of answering the issue [S1]. Updates the database [S2]. Bot notifies the user regarding the reward [S3]. If the next level has been attained, the bot awards the user with a badge [S4].<br>
#### 3 Subflows<br>
&nbsp;&nbsp;&nbsp;&nbsp; [S1] Bot continuously polls and detects events of answering GitHub issues.<br>
&nbsp;&nbsp;&nbsp;&nbsp; [S2] Bot makes an entry/adds the points into the database with the number of points for that respective user.<br>
&nbsp;&nbsp;&nbsp;&nbsp; [S3] Bot notifies the user on the discord platform regarding the reward for answering the issue.<br>
&nbsp;&nbsp;&nbsp;&nbsp; [S4] Bot checks if the next level has been attained by checking the number of points and accordingly notifies the user.<br><br>

### Use Case 2
#### Use Case: Providing rewards for commits to a Github repository<br>
#### 1 Preconditions<br>
   &nbsp;&nbsp;&nbsp;&nbsp; The user must make a commit to the GitHub repo.<br>
   &nbsp;&nbsp;&nbsp;&nbsp; The user must be registered with Discord.<br>
   &nbsp;&nbsp;&nbsp;&nbsp; The Github token must be available to access the GitHub repository.<br>
   &nbsp;&nbsp;&nbsp;&nbsp; The database must exist to make entries for the users.<br>
#### 2 Main Flow<br>
&nbsp;&nbsp;&nbsp;&nbsp; Bot detects the event of commits to a repository [S1]. Updates the database with reward points [S2]. Bot notifies the user regarding the reward [S3]. If the next level has been attained, the bot awards the user with a badge [S4].<br>
#### 3 Subflows<br>
&nbsp;&nbsp;&nbsp;&nbsp; [S1] Bot continuously polls and detects events of commits to GitHub.<br>
&nbsp;&nbsp;&nbsp;&nbsp; [S2] Bot makes an entry/adds the points into the database with the number of points for that respective user.<br>
&nbsp;&nbsp;&nbsp;&nbsp; [S3] Bot notifies the user on the discord platform regarding the reward for answering the issue.<br>
&nbsp;&nbsp;&nbsp;&nbsp; [S4] Bot checks if the next level has been attained by checking the number of points and accordingly notifies the user.<br><br>

### Use Case 3
#### Use Case: Awarding for using positive words in channel conversations<br>
#### 1 Preconditions<br>
   &nbsp;&nbsp;&nbsp;&nbsp; A mechanism must exist for analysis of positive words in channels.<br>
   &nbsp;&nbsp;&nbsp;&nbsp; The user must be registered with Discord.<br>
   &nbsp;&nbsp;&nbsp;&nbsp; The user must post a message on the channel.<br>
   &nbsp;&nbsp;&nbsp;&nbsp; The database must exist to make entries for the users.<br>
#### 2 Main Flow<br>
&nbsp;&nbsp;&nbsp;&nbsp; Event detection for the message posted on the channel [S1]. Award points based on the score of sentiments for the message[S2]. Updates the database with reward points [S3]. If the next level has been attained, the bot awards the user with a badge [S4].<br>
#### 3 Subflows<br>
&nbsp;&nbsp;&nbsp;&nbsp; [S1] Bot continuously polls and detects events of messages posted on the channel.<br>
&nbsp;&nbsp;&nbsp;&nbsp; [S2] Calculates the reward points based on the score of sentiments for the message.<br>
&nbsp;&nbsp;&nbsp;&nbsp; [S3] The bot adds/makes an entry with the calculated points for the respective user.<br>
&nbsp;&nbsp;&nbsp;&nbsp; [S4] Bot checks if the next level has been attained by checking the number of points and accordingly notifies the user.<br>
#### 4 Alternative flows<br>
&nbsp;&nbsp;&nbsp;&nbsp; [E1] The sentiment is neutral/negative.<br><br>

### Use Case 4
#### Use Case: Self Statistics <br>
#### 1 Preconditions<br>
   &nbsp;&nbsp;&nbsp;&nbsp; The user database must exist.<br>
   &nbsp;&nbsp;&nbsp;&nbsp; The user must be registered with Discord.<br>
   &nbsp;&nbsp;&nbsp;&nbsp; User must query the bot for self statistics.<br>
#### 2 Main Flow<br>
&nbsp;&nbsp;&nbsp;&nbsp; Bot queries the database for the respective user [S1]. The bot provides information regarding the number of points, levels and badges for the respective user [S2].<br>
#### 3 Subflows<br>
&nbsp;&nbsp;&nbsp;&nbsp; [S1] Bot queries the database with the respective username to fetch information.<br>
&nbsp;&nbsp;&nbsp;&nbsp; [S2] Provides information to the respective user regarding the points for respective reward activities, level attained and badges.<br>
#### 4 Alternative flows<br>
&nbsp;&nbsp;&nbsp;&nbsp; [E1] Wrong query provided unrelated to self statistics.<br><br>


# Design Sketches

- Bot rewarding points for making commit

![commit](https://media.github.ncsu.edu/user/22719/files/54611231-d6fd-4ff2-bc16-77a4428edf97)

- Bot rewarding points for solving issues

![issue](https://media.github.ncsu.edu/user/22719/files/91ea5cb5-5d88-4e15-95ca-664a3e001eef)

- Bot appreciating positive reinforcement features using Text Analysis

![positive](https://media.github.ncsu.edu/user/22719/files/8eb6cf2d-cf77-4fcf-82d6-6bf7a820c499)

![positive2](https://media.github.ncsu.edu/user/22719/files/592efbcc-d275-41a3-91df-cdae035e2527)

- Bot generates the User self statistics

![self stats](https://media.github.ncsu.edu/user/22719/files/68191fba-bfa2-4082-83b5-94271d6cdcbb)

## Storyboard

![Story1](https://media.github.ncsu.edu/user/22526/files/10b13bc6-92f6-4321-bde8-0341441a266e)

![Story2](https://media.github.ncsu.edu/user/22526/files/23f36ec3-5434-47f3-beb7-f5dfe5604261)


# Architecture Design

## Architecture Diagram

![image](https://media.github.ncsu.edu/user/22526/files/6cfd0578-a8db-4c92-a59c-ae8cf79fc507)

Describe the architecture components in the text.
The platform that the bot would be embedded in is Discord. The bot would be monitoring the actions on the Github server through a webhook. The bot is also monitoring the user events using the discord API. The bot then invokes the appropriate function with respect to the use case. The functions then query and/or modify the user information stored in the Postgres database. The Postgres database stores detailed information about the rewards, the users, the channels, and the actions the user has been rewarded. We will be using the ‘sentiment’ library to perform text analysis for determining the score of positive messages in channels. Finally, the bot sends the response back to the user through the proxy using the discord APIs. The third-party services we would be using are Postgres DB, Text analysis library, and GitHub webhook.

## Constraints and guidelines 
1. The Bot cannot send information from one user to another.
2. Bot can only handle a query in the form of self statistics.
3. Dependency on the server for the bot to be live.
4. Bot cannot handle other GitHub events except GitHub issues and Git commits.

## Additional design patterns 
The Software Architecture design patterns that are relevant to our bot design are as follows:

### Repository:
It will focus on the encapsulation of the logic necessary to interact with the centralized data. It will decouple the nitty-gritty of the infrastructure layer from the bot application.

### Object-Oriented:
It will help divide the responsibilities of the bot into individual reusable and self-sufficient objects. It will make the code more testable and robust.

### Pipes and filters
Filter components will process the input as they receive and perform transformations on data.  Pipe components will serve as connectors for the stream of data being transformed, each connected to the next component in the pipeline. This architecture would help in filtering out user data and then aggregating the reward points.

### Implicit and explicit Invocation
The bot is invoked on implicit events such as committing to the Github repository and answering the Github issues. The bot is also invoked on specific commands from the user.
 
 

