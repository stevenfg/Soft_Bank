package com.wellsfargo.softbank.repository;

import com.wellsfargo.softbank.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
