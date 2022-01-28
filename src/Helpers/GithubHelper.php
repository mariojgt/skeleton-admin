<?php

namespace Mariojgt\SkeletonAdmin\Helpers;

use Illuminate\Support\Facades\Http;

class GithubHelper
{
    /**
     * We use this construct to inicialize the github rest api
     * github.github_token is define in the first app setup
     */
    public function __construct()
    {
        $this->GITHUB_TOKEN    = config('github.github_token');
    }

    /**
     * Get all repositories from organization
     *
     * @param string $organization
     *
     * @return [array string]
     */
    public function getRepositories($organization = "mjgt-Studios")
    {
        return $this->getGenericRequest('https://api.github.com/orgs/' . $organization . '/repos');
    }

    /**
     * Get all repositories tag information
     *
     * @param mixed $organization
     * @param mixed $repoName
     *
     * @return [array string]
     */
    public function getRepoTag($organization, $repoName)
    {
        return $this->getGenericRequest('https://api.github.com/repos/' . $organization . '/' . $repoName . '/tags');
    }

    /**
     * Generic request, For Example you can get any url from the documentation to work in here
     *
     * @param mixed $url
     *
     * @return [array string]
     */
    public function getGenericRequest($url)
    {
        $response = Http::withHeaders([
            'Authorization' => 'token ' . $this->GITHUB_TOKEN
        ])->get($url, []);

        // dd($response->json(), $response->successful());
        // Check if has been sucesffll the request
        return [
            'status' => $response->successful(),
            'data'   => $response->json()
        ];
    }

    /**
     * Try validate the github token
     *
     * @param mixed $token
     * @param string $organization
     *
     * @return [json]
     */
    public function validateToken($token, $organization = "mjgt-Studios")
    {
        $response = Http::withHeaders([
            'Authorization' => 'token ' . $token
        ])->get('https://api.github.com/orgs/' . $organization . '/repos', []);

        // If is true we goin to generate a config file with the github key
        if ($response->successful()) {
            // Create the github config file
            $this->createConfigGithubFile($token);
            // Create the compsoer auth config file
            $this->createComposerAuth($token);
        }
        // dd($response->json(), $response->successful());
        // Check if has been sucesffll the request
        return $response->successful();
    }

    /**
     * Create the config file that wil be use to get github informations
     *
     * @param mixed $token
     *
     * @return [true]
     */
    public function createConfigGithubFile($token)
    {
        // Create a fisical file in ther server that will be use to acess github
        $githubFile = "
        <?php
            return [
                'github_token' => '" . $token . "'
            ];
        ";
        // Now save the composer.jon file
        file_put_contents(config_path('github.php'), $githubFile);
        return true;
    }

    /**
     * Create a auth.json in the project root so we can autorize composer to get private pacakges
     *
     * @param mixed $token
     * @param string $username
     *
     * @return [true]
     */
    public function createComposerAuth($token, $username = "mariojgt")
    {
        // Add the target repository
        $final = [
            "http-basic" => [
                "github.com" => [
                    "username" => $username,
                    "password" => $token
                ]
            ]
        ];
        // Now save the composer.jon file
        file_put_contents(base_path('auth.json'), json_encode($final));
        return true;
    }
}
