package config

import (
	"errors"
	"log"
	"time"

	"github.com/spf13/viper"
)

type Config struct {
	Server   ServerAccount
	Database DatabaseAccount
}

type ServerAccount struct {
	Name string
	Port int
}

type DatabaseAccount struct {
	ServerType      string
	DriverSource    string
	MaxOpenConns    int
	ConnMaxLifetime time.Duration
	MaxIdleConns    int
	ConnMaxIdleTime time.Duration
}

// * Init Config
func InitConfig() *Config {

	configFile, err := LoadConfig("./config/config")
	if err != nil {
		log.Fatalf("LoadConfig: %v", err)
	}

	cfg, err := ParseConfig(configFile)
	if err != nil {
		log.Fatalf("ParseConfig: %v", err)
	}
	return cfg
}

//* Load config file from given path
func LoadConfig(filename string) (*viper.Viper, error) {
	v := viper.New()

	v.SetConfigName(filename)
	v.AddConfigPath(".")
	v.AutomaticEnv()
	if err := v.ReadInConfig(); err != nil {
		if _, ok := err.(viper.ConfigFileNotFoundError); ok {
			return nil, errors.New("config file not found")
		}
		return nil, err
	}

	return v, nil
}

//* Parse config file
func ParseConfig(v *viper.Viper) (*Config, error) {
	var c Config

	err := v.Unmarshal(&c)
	if err != nil {
		log.Printf("unable to decode into struct, %v", err)
		return nil, err
	}

	return &c, nil
}
