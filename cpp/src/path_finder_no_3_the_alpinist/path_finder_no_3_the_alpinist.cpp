// https://www.codewars.com/kata/576986639772456f6f00030c/train/cpp
// for build: make TASK=path_finder_no_3_the_alpinist
// for run: ./bin/path_finder_no_3_the_alpinist

#include "test_function.h"

#include <vector>
#include <string>
#include <queue>
#include <cmath>
#include <limits>

using namespace std;

int path_finder(std::string maze)
{
    vector<vector<int>> heights;
    vector<int> row;
    for (char ch : maze)
    {
        if (ch == '\n')
        {
            heights.push_back(row);
            row.clear();
        }
        else
        {
            row.push_back(ch - '0');
        }
    }
    if (!row.empty())
        heights.push_back(row);

    int N = heights.size();
    vector<vector<int>> dist(N, vector<int>(N, numeric_limits<int>::max()));
    dist[0][0] = 0;

    using State = pair<int, pair<int, int>>;
    priority_queue<State, vector<State>, greater<>> pq;
    pq.push({0, {0, 0}});

    int dx[4] = {-1, 0, 1, 0};
    int dy[4] = {0, 1, 0, -1};

    while (!pq.empty())
    {
        auto [cost, pos] = pq.top();
        pq.pop();
        int x = pos.first, y = pos.second;

        if (x == N - 1 && y == N - 1)
            return cost;

        for (int d = 0; d < 4; ++d)
        {
            int nx = x + dx[d];
            int ny = y + dy[d];

            if (nx >= 0 && nx < N && ny >= 0 && ny < N)
            {
                int new_cost = cost + abs(heights[x][y] - heights[nx][ny]);

                if (new_cost < dist[nx][ny])
                {
                    dist[nx][ny] = new_cost;
                    pq.push({new_cost, {nx, ny}});
                }
            }
        }
    }

    return -1;
}

int main()
{
    string s1 = 

    "000\n"
    "000\n"
    "000";
        
    string s2 = 	
    
    "010\n"
    "010\n"
    "010";
    
    string s3 = 	
    
    "010\n"
    "101\n"
    "010";
    
    string s4 = 	
    
    "0707\n"
    "7070\n"
    "0707\n"
    "7070";
    
    string s5 = 
    
    "700000\n"
    "077770\n"
    "077770\n"
    "077770\n"
    "077770\n"
    "000007";
    
    string s6 = 	
    
    "777000\n"
    "007000\n"
    "007000\n"
    "007000\n"
    "007000\n"
    "007777";
    
    string s7 = 	
    
    "000000\n"
    "000000\n"
    "000000\n"
    "000010\n"
    "000109\n"
    "001010";	
    
    testFunction(path_finder, 0, s1);
    testFunction(path_finder, 2, s2);
    testFunction(path_finder, 4, s3);
    testFunction(path_finder, 42, s4);
    testFunction(path_finder, 14, s5);
    testFunction(path_finder, 0, s6);
    testFunction(path_finder, 4, s7);
}
