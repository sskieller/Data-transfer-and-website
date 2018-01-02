/*
Author: Søren Skieller
*/
#include "WebsiteScoreHandling.h"
#include <iostream>

using namespace std;

int main()
{
	setNewIPJS();
	WebsiteScoreHandling gc1("HOLD1", "HOLD2", 1, 2, 80000, 9);
	WebsiteScoreHandling gc2("TEAM2", "basddaen", 3, 4, 65400, 5);
	WebsiteScoreHandling gc3("TEAM3", "be1233n", 5, 6, 40004, 2);
	WebsiteScoreHandling gc4("TeAM UniCorN", "TEAM GIT GUD", 10, 0, 22222, 1);
	WebsiteScoreHandling gc5("TEAM ABC", "TEAM DEF", 9, 7, 18000, 10);
	system("PAUSE");
	return 0;
}